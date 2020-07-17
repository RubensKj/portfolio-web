import React from 'react';
import { Route } from 'react-router-dom';

// Pages
import Login from '../pages/Login';

const AuthRoutes: React.FC = () => (
  <>
    <Route path='/login' component={Login} />
  </>
);

export default AuthRoutes;