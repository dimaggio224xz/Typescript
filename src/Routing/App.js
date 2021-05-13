import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainPage } from '@pages';
const routes = [{ path: '/', Component: MainPage }];

export const App = () => {
  return (
    <div>
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route path={path} component={Component} />
        ))}
        <Redirect to='/' />{' '}
      </Switch>
    </div>
  );
};
