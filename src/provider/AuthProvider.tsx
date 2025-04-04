import { createContext, useEffect, useState } from 'react';

import app from '../FirebaseAuth/firebase.config';
import { ReactNode } from 'react';
import { getAuth, Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { RegisterFormValues } from '../utils/Types/registerType';
import { AuthContextType } from '../utils/Types/AutContextType';
import { LoginFormValues } from '../utils/Types/loginType';

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<RegisterFormValues | LoginFormValues>();
  const auth: Auth = getAuth(app);
  const createNewUser = async ({email, password}: Pick<RegisterFormValues, 'email' | 'password'>): Promise<{ success: boolean; message: string }> => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      if (result) {
        return {
          success: true,
          message: "User created successfully"
        };
      }
      return {
        success: false,
        message: "Failed to create user"
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: error instanceof Error ? error.message : "An unknown error occurred"
      };
    }
  };
  const signInNewUser = async ({email, password}: Pick<RegisterFormValues, 'email' | 'password'>): Promise<{ success: boolean; message: string }> => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (result) {
        return {
          success: true,
          message: "User created successfully"
        };
      }
      return {
        success: false,
        message: "Failed to create user"
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: error instanceof Error ? error.message : "An unknown error occurred"
      };
    }
  }

  
  const authInfo: AuthContextType = {
    user,
    setUser,
    createNewUser,
    signInNewUser
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser ? { email: currentUser.email || '', password: '' } : undefined);
    });
    return () => {
      unsubscribe();
    }
  }, [])
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
