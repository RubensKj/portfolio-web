import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Route
import PrivateRoute from './PrivateRoute';

// Pages
import Main from '../pages/Main';
import Projects from '../pages/Projects';
import Certifications from '../pages/Certifications';
import EditPortfolio from '../pages/EditPortfolio';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/projects' component={Projects} />
        <Route path='/certifications' component={Certifications} />
        <PrivateRoute path='/edit' component={EditPortfolio} />
        <Route path='/login' component={Login} />
        <Route path='**' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;