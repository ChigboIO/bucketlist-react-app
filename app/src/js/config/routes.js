import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../components/App';
import Home from '../components/App/Home';
import Signin from '../components/App/Signin'

const AppRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={ App } >
      <IndexRoute component={Home} />
      <Route path="/bucket/:bucketId" component={Home} />
      <Route path="/bucket/:bucketId/:itemStatus" component={Home} />
      <Route path="/signin" component={ Signin } />
    </Route>
  </Router>
);

export default AppRouter;
