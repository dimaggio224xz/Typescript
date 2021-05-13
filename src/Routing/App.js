import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from 'main-pages';
const routes = [];

export const App = () => {
  return (
    <div>
      <MainPage />
      <Switch>{routes.map()}</Switch>
    </div>
  );
};
