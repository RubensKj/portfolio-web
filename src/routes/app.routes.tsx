import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import EditPortfolio from '../pages/EditPortfolio';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path='/edit' component={EditPortfolio} />
  </Switch>
);

export default AppRoutes;