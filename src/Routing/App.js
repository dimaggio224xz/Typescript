import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROOT_CONSTANTS } from '@root-constants';
import { MainPage, CompoundInterest, Menu } from '@pages';
const routes = [
  { path: ROOT_CONSTANTS.HOME.link, exact: false, Component: MainPage },
  { path: ROOT_CONSTANTS.COMPOUND_INTEREST.link, exact: true, Component: CompoundInterest },
];

export const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        {routes.map(({ path, exact, Component }) => (
          <Route path={path} exact={exact} component={Component} />
        ))}
        <Route path='/'>
          <Redirect push to={ROOT_CONSTANTS.HOME.link} />
        </Route>
        <Redirect to={ROOT_CONSTANTS.HOME} />
      </Switch>
    </>
  );
};
