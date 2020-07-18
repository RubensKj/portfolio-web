import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../contexts/auth';

interface IPrivateRouteProps {
  path: string;
  component: any;
  location?: object;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ path, component: Component, location }) => {
  const { signed } = useAuth();

  return (
    <Route
      path={path}
      render={props =>
        signed ? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          )
      }
    />
  );
}

export default PrivateRoute;