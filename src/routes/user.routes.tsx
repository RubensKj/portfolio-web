import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Main from '../pages/Main';
import Projects from '../pages/Projects';
import Certifications from '../pages/Certifications';

const UserRoutes: React.FC = () => (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route path='/projects' component={Projects} />
    <Route path='/certifications' component={Certifications} />
  </Switch>
);

export default UserRoutes;