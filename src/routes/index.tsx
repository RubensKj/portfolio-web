import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Context
import { useAuth } from '../contexts/auth';

// Components
import LoadingPage from '../components/LoadingPage';

// Routes
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import UserRoutes from './user.routes';
import UtilitiesRoutes from './utilities.routes';

// Pages
import Main from '../pages/Main';
import Projects from '../pages/Projects';
import Certifications from '../pages/Certifications';
import EditPortfolio from '../pages/EditPortfolio';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <LoadingPage />
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/projects' component={Projects} />
        <Route path='/certifications' component={Certifications} />
        {signed ? <Route path='/edit' component={EditPortfolio} /> : <Route path='/login' component={Login} />}
        <Route path='**' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;