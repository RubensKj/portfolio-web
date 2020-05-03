import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Main from './pages/Main';
import Login from './pages/Login';

// Utilities
import NotFound from './pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/login' component={Login} />
      <Route path='**' component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;