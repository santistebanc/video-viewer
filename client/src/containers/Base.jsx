import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import Auth from '../modules/Auth';

import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx';
import SignUpPage from './SignUpPage.jsx';
import DashboardPage from './DashboardPage.jsx';

const Base = () => (
  <div>
    <div className="top-bar">

      <div className="top-bar-left">
        <Link to="/">Video Viewer</Link>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout">Log out</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/dashboard" render={(props)=>(
        Auth.isUserAuthenticated()?<DashboardPage/>:<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/logout" render={props => {
        Auth.deauthenticateUser();
        return <Redirect to={{ pathname: '/login' }}/>
      }}/>
    </Switch>

  </div>
);

export default Base;
