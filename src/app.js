import React from 'react';
import { Router } from '@reach/router';
import { Manager, List } from './containers';
import { Header } from './components';
import { ROUTER_LINKS } from './contants';

const App = () => (
  <>
    <Header />
    <Router>
      <Manager default path={ROUTER_LINKS.MANAGER} />
      <List path={ROUTER_LINKS.LIST} />
    </Router>
  </>
);

export { App, };
