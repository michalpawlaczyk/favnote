import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes/routes';
import { Provider } from 'react-redux';
import store from 'store';
import GlobalStyle from 'theme/GlobalTheme';
import MainTemplate from 'templates/MainTemplate';
import ItemsView from 'views/ItemsView';
import theme from 'theme/mainTheme';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to={routes.notes} />} />
            <Route exact path={routes.items} component={ItemsView} />
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
export default Root;
