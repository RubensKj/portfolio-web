import React from 'react';

// Providers
import { ToastProvider } from '../hooks/toast';
import { LoadingProvider } from './loading';
import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <LoadingProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </LoadingProvider>
    </ToastProvider>
  );
}

export default AppProvider;