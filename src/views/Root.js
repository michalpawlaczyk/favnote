import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch } from 'react-router-dom';
import { routes } from 'routes/routes';
import { Provider } from 'react-redux';
import store from 'store';
import { AuthProvider } from 'context/AuthContext';
import { ProtectedRoute } from 'utils/ProtectedRoute';
import GlobalStyle from 'theme/GlobalTheme';
import ItemsView from 'views/ItemsView';
import ItemView from 'views/ItemView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import theme from 'theme/mainTheme';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Switch>
              <ProtectedRoute
                exact
                redirectTo={routes.notes}
                path={routes.home}
                component={LoginView}
              />
              <ProtectedRoute
                exact
                redirectTo={routes.notes}
                path={routes.register}
                component={RegisterView}
              />
              <ProtectedRoute
                exact
                redirectTo={routes.notes}
                path={routes.login}
                component={LoginView}
              />
              <ProtectedRoute exact path={routes.items} component={ItemsView} />
              <ProtectedRoute exact path={routes.item} component={ItemView} />
            </Switch>
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
