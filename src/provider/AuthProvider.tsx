import { createContext, useEffect, useState } from 'react';

import app from '../FirebaseAuth/firebase.config';
import { ReactNode } from 'react';
import { getAuth, Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { RegisterFormValues } from '../utils/Types/registerType';
import { AuthContextType } from '../utils/Types/AutContextType';
import { LoginFormValues } from '../utils/Types/loginType';
import {useNavigate } from 'react-router';

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);


const provider = new GoogleAuthProvider();
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
  const signInWithGoogle = async () => {
    try {
      return await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
   
    
    } catch (error) {
      console.log(error);
    }
  }
  const logOut = async () => {
    try {
      return await signOut(auth).then(() => {
        // Sign-out successful.
        console.log("User signed out successfully");
      }).catch((error) => {
        // An error happened.
        console.error("An error occurred while signing out:", error);
      });
    }
    catch (error) {
      console.log(error);
    }
  }

  
  const authInfo: AuthContextType = {
    user,
    setUser,
    createNewUser,
    signInNewUser,
    logOut,
    signInWithGoogle
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
