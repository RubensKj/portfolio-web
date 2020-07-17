import React, { useState, useEffect, createContext, useContext } from 'react';

import { signIn } from '../services/auth';
import api from '../services/api';

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IAuthContext {
  signed: boolean;
  user: object | null;
  loading: boolean;
  login(data: ILoginForm): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await localStorage.getItem('user');
      const storagedToken = await localStorage.getItem('token');

      if (storageUser && storagedToken) {
        setUser(JSON.parse(storageUser));
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function login(data: ILoginForm) {
    const response = await signIn(data);

    api.defaults.headers['Authorization'] = response.token;

    setUser(response.user);
    await localStorage.setItem('user', JSON.stringify(response.user));
    await localStorage.setItem('token', response.token);
  }

  async function logout() {
    setUser(null);

    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user: user, loading: loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}