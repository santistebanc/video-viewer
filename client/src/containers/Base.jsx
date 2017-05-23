import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import Auth from '../modules/Auth';

import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx';
import SignUpPage from './SignUpPage.jsx';
import DashboardPage from './DashboardPage.jsx';
import VideoPage from './VideoPage.jsx';

const Base = () => (
  <div>
    <div className="top-bar">

      <div className="top-bar-left">
        <Link to="/">México en Dron</Link>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout">Cerrar Sesión</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/signup">Registrarse</Link>
        </div>
      )}

    </div>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/video/:id" component={VideoPage} />
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
