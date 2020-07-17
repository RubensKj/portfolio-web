import React from 'react';
import { Route } from 'react-router-dom';

// Pages
import Main from '../pages/Main';
import Projects from '../pages/Projects';
import Certifications from '../pages/Certifications';

const UserRoutes: React.FC = () => (
  <>
    <Route exact path='/' component={Main} />
    <Route path='/projects' component={Projects} />
    <Route path='/certifications' component={Certifications} />
  </>
);

export default UserRoutes;