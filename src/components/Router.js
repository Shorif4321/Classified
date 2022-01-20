/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import useRouterConfig from '../hooks/useRouterConfig';

const Router = function () {
  const routes = useRouterConfig();

  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default Router;
