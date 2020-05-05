import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes/routes';
import { Provider, useSelector } from 'react-redux';
import store from 'store';
import GlobalStyle from 'theme/GlobalTheme';
import ItemsView from 'views/ItemsView';
import ItemView from 'views/ItemView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import theme from 'theme/mainTheme';

const RootWithoutStore = () => {
  const isLogin = useSelector(({ userReducer }) => !!userReducer.uid);

  return (
    <Switch>
      <Route
        exact
        path={routes.home}
        render={() => (isLogin ? <Redirect to={routes.notes} /> : <Redirect to={routes.login} />)}
      />
      <Route exact path={routes.register} component={RegisterView} />
      <Route exact path={routes.login} component={LoginView} />
      <Route exact path={routes.items} component={ItemsView} />
      <Route exact path={routes.item} component={ItemView} />
    </Switch>
  );
};

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <RootWithoutStore />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
