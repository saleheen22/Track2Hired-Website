import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import app from '../FirebaseAuth/firebase.config';
import { ReactNode } from 'react';
import { getAuth, Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,GoogleAuthProvider, signInWithPopup,  updateProfile , getAdditionalUserInfo } from "firebase/auth";
import { RegisterFormValues } from '../utils/Types/registerType';
import { AuthContextType } from '../utils/Types/AutContextType';

import { UserProfileType } from '../utils/Types/UserProfileType';

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);


const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserProfileType>();
  const auth: Auth = getAuth(app);


  const createNewUser = async ({email, password, firstName, lastName}: Pick<RegisterFormValues, 'email' | 'password' |'firstName' | 'lastName'>): Promise<{ success: boolean; message: string }> => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      if (result) {
        const displayName = `${firstName} ${lastName}`;
        await updateProfile(result.user, {
          displayName: displayName,
        });
        const userData = {
          email,
          firstName,
          lastName,
          displayName: displayName
        }
        try {
          await axios.post('http://localhost:3000/create-user', userData);
          setUser(userData);
          return {
            success: true,
            message: "User created successfully"
          };
        } catch (dbError) {
          console.error('Failed to create user in database:', dbError);
        }
       
      }
      return {
        success: false,
        message: "Failed to create user"
      };
    } catch (error) {
      console.log(error);
     
      if (error instanceof Error) {
        const firebaseError = error as { code?: string };
        if (firebaseError.code === 'auth/email-already-in-use') {
          alert("This email is already registered. Please use a different email or try logging in.");
          return {
            
            success: false,
            message: "This email is already registered. Please use a different email or try logging in."
          };
        }
      }
      return {
        success: false,
        message: error instanceof Error ? error.message : "An unknown error occurred"
      };
    }
  };
  const signInNewUser = async ( {email, password}: Pick<RegisterFormValues, 'email' | 'password'>): Promise<{ success: boolean; message: string}> => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (result) {
        return {
          success: true,
          message: "User created successfully",
        
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
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const isNewUser = getAdditionalUserInfo(result)?.isNewUser;
        if (result.user) {
          const [firstName, lastName] = (result.user.displayName || '').split(' ');
          const userData = {
            email: result.user.email || '',
            firstName,
            lastName,
            displayName: result.user.displayName || '',
            
          }
          setUser(userData);
          if (isNewUser) {
            // Call your create-user API
            try {
              await axios.post('http://localhost:3000/create-user', userData);
              console.log('User record created in database');
            } catch (error) {
              console.error('Failed to create user record:', error);
            }
          }
        }
        
      }).catch((error) => {
        // Handle Errors here.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const errorCode = error.code;
        console.log(errorCode);
        console.log(error.message);
        GoogleAuthProvider.credentialFromError(error);
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
    signInWithGoogle,
    loading,
    // updateUserProfile
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
  
      if (currentUser) {
        const [firstName, lastName] = (currentUser.displayName || '').split(' ');
        setUser({
          email: currentUser.email || '',
          firstName,
          lastName,
          displayName: currentUser.displayName || '',
        });
      } else {
        setUser(undefined);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    }
  }, [auth]);
  if (loading) {
    return <div className="flex justify-center items-center h-screen"><progress className="progress w-56"></progress></div>;
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
