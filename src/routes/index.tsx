import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Context
import { useAuth } from '../contexts/auth';

// Components
import LoadingPage from '../components/LoadingPage';

// Routes
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import UserRoutes from './user.routes';
import UtilitiesRoutes from './utilities.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  console.log(signed)

  if (loading) {
    return <LoadingPage />
  }

  return (
    <BrowserRouter>
      {signed && <AppRoutes />}
      <AuthRoutes />
      <UserRoutes />
      <UtilitiesRoutes />
    </BrowserRouter>
  );
}

export default Routes;