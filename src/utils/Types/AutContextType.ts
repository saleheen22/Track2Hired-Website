import { LoginFormValues } from "./loginType";
import { RegisterFormValues } from "./registerType";

export interface AuthContextType {
    user: RegisterFormValues | undefined | LoginFormValues;
    setUser: React.Dispatch<React.SetStateAction<RegisterFormValues | undefined | LoginFormValues>>;
    createNewUser: (data: Pick<RegisterFormValues, 'email' | 'password'>) => Promise<{ success: boolean; message: string }>;
    signInNewUser: (data: Pick<RegisterFormValues, 'email' | 'password'>) => Promise<{ success: boolean; message: string }>;
    logOut: () => Promise<void>;
    signInWithGoogle: () => Promise<void>;
  }
  
