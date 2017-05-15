import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx';
import SignUpPage from './SignUpPage.jsx';

const Base = () => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <Link to="/">Video Viewer</Link>
      </div>

      <div className="top-bar-right">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>

    </div>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
    </Switch>

  </div>
);

export default Base;
