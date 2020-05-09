import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routes } from 'routes/routes';
import { AuthContext } from 'context/AuthContext';

export const ProtectedRoute = ({ component: RouteComponent, redirectTo, ...others }) => {
  const { isLogin } = useContext(AuthContext);
  return redirectTo ? (
    <Route
      {...others}
      render={(routeProps) =>
        isLogin ? <Redirect to={redirectTo} /> : <RouteComponent {...routeProps} />
      }
    />
  ) : (
    <Route
      {...others}
      render={(routeProps) =>
        isLogin ? <RouteComponent {...routeProps} /> : <Redirect to={routes.login} />
      }
    />
  );
};

ProtectedRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.func.isRequired,
};

ProtectedRoute.defaultProps = {
  redirectTo: null,
};
