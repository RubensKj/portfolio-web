import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Main from '../pages/Main';
import Login from '../pages/Login';
import Projects from '../pages/Projects';
import ProjectDetail from '../pages/ProjectDetail';
import Certifications from '../pages/Certifications';

// Utilities
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/login' component={Login} />
      <Route exact path='/projects' component={Projects} />
      <Route path='/projects/:id' component={ProjectDetail} />
      <Route path='/certifications' component={Certifications} />
      <Route path='**' component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;