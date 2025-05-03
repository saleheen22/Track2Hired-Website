import { RegisterFormValues } from './registerType';
import { UserProfileType } from './UserProfileType';

export interface AuthContextType {
  user: UserProfileType | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserProfileType | undefined>>;
  createNewUser: (
    data: Pick<
      RegisterFormValues,
      'email' | 'firstName' | 'lastName' | 'password'
    >
  ) => Promise<{ success: boolean; message: string }>;
  signInNewUser: (
    data: Pick<RegisterFormValues, 'email' | 'password'>
  ) => Promise<{ success: boolean; message: string }>;
  logOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  loading: boolean;
  // updateUserProfile: (updatedUser: RegisterFormValues | User) => Promise<void>
}
