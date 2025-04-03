import { createContext, useState } from 'react';

export const AuthContext = createContext({});
import { ReactNode } from 'react';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState();
  const authInfo = {
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
