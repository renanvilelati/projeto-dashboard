import { useState, useEffect, createContext } from 'react';

interface IAuthProvider {
  children: React.ReactNode;
}

interface IsignIn {
  email: string;
  password: string;
}

interface IAuthContext {
  signed: boolean;
  user: any;
  signIn: ({ email, password }: IsignIn) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState(null);

  const signIn = ({ email, password }: IsignIn) => {
    console.log(email);
    console.log(password);
    alert('LOGADO COM SUCESSO');
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
