import React, { useState, useEffect, createContext, useContext } from 'react';

import { signIn } from '../services/auth';
import api from '../services/api';
import { useToast } from '../hooks/toast';

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IAuthContext {
  signed: boolean;
  user: object | null;
  login(data: ILoginForm): void;
  logout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();

  const userStorage = localStorage.getItem('user');

  const [user, setUser] = useState<object | null>(userStorage && userStorage !== 'undefined' ? JSON.parse(userStorage) : null);

  useEffect(() => {
    function loadStorageData() {
      const storagedToken = localStorage.getItem('token');

      if (storagedToken) {
        api.defaults.headers['Authorization'] = storagedToken;
      }
    }

    loadStorageData();
  }, []);

  function login(data: ILoginForm) {
    signIn(data).then(response => {
      const { uuid, userDTO } = response.data;

      api.defaults.headers['Authorization'] = uuid;

      setUser(userDTO);
      localStorage.setItem('user', JSON.stringify(userDTO));
      localStorage.setItem('token', uuid);

      addToast({
        type: 'success',
        title: 'Login succeed',
        description: 'You are logged in on the application!!'
      });
    }).catch(error => {
      if (error.response && error.response.status === 401) {
        addToast({
          type: 'error',
          title: 'Bad Credentials',
          description: 'Your e-mail or password is wrong!'
        });
      }

      addToast({
        type: 'error',
        title: 'Error',
        description: error.message
      });
    });
  }

  async function logout() {
    setUser(null);

    localStorage.clear();

    addToast({
      type: 'success',
      title: 'Logout succeed',
      description: 'You are have been logged out successfully!!'
    });
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