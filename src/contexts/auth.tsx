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
  login(data: ILoginForm): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const userStorage = localStorage.getItem('user');

  const [user, setUser] = useState<object | null>(userStorage ? JSON.parse(userStorage) : null);

  useEffect(() => {
    function loadStorageData() {
      const storagedToken = localStorage.getItem('token');

      api.defaults.headers['Authorization'] = storagedToken;
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
    <AuthContext.Provider value={{ signed: !!user, user: user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}