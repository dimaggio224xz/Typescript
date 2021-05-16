import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROOT_CONSTANTS } from '@root-constants';
import { MainPage, CompoundInterest } from '@pages';
const routes = [
  { path: ROOT_CONSTANTS.HOME, exact: false, Component: MainPage },
  { path: ROOT_CONSTANTS.COMPOUND_INTEREST, exact: true, Component: CompoundInterest },
];

export const App = () => {
  return (
    <div>
      <Switch>
        {routes.map(({ path, exact, Component }) => (
          <Route path={path} exact={exact} component={Component} />
        ))}
        <Redirect to={ROOT_CONSTANTS.HOME} />
      </Switch>
    </div>
  );
};
