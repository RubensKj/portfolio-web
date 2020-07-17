import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Login from '../pages/Login';

const AuthRoutes: React.FC = () => (
  <Switch>
    <Route path='/login' component={Login} />
  </Switch>
);

export default AuthRoutes;