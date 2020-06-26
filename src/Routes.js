import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'src/pages';
import Update from 'src/pages/Update';
import Create from 'src/pages/Create';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/update/:id' component={Update} />
        <Route exact path='/create' component={Create} />
      </Switch>
    </Router>
  );
};
export default Routes;
