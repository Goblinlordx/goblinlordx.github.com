import React from 'react';
import {Router, Route, IndexRoute, Redirect, browserHistory} from 'react-router';
import NavShell from 'component/NavShell';
import Home from 'component/Home';
import NotFound from 'component/NotFound';

const Routing = () => (
  <Router history={browserHistory}>
    <Route path="" component={NavShell}>
      <Route path="/">
        <IndexRoute component={Home}/>
        <Route path="404" component={NotFound}/>
        <Redirect path="*" to="404"/>
      </Route>
    </Route>
  </Router>
);

export default Routing;
