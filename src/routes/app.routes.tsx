import React from 'react';
import { Route } from 'react-router-dom';

// Pages
import EditPortfolio from '../pages/EditPortfolio';

const AppRoutes: React.FC = () => (
  <>
    <Route path='/edit' component={EditPortfolio} />
  </>
);

export default AppRoutes;