import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Main from './pages/Main';
import Login from './pages/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/login' component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;