import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Utilities
import NotFound from '../pages/NotFound';

const UtilitiesRoutes: React.FC = () => (
  <Switch>
    <Route path='**' component={NotFound} />
  </Switch>
);

export default UtilitiesRoutes;