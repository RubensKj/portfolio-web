import React from 'react';
import { Route } from 'react-router-dom';

// Utilities
import NotFound from '../pages/NotFound';

const UtilitiesRoutes: React.FC = () => (
  <>
    <Route path='**' component={NotFound} />
  </>
);

export default UtilitiesRoutes;