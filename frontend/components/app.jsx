import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from './splash/splash_container';


const App = () => (
  <div>
    <header>
      {/* <SplashContainer /> */}
      <Switch>
        <Route path="/" component={SplashContainer} />
        <AuthRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute exact path="/feed" component={SplashContainer} />
        <Redirect to="/feed" />
        <Redirect to="/" />
      </Switch>
    </header>
    <footer>
      <a className='footer-links' href='https://github.com/ivopavlov87/Fullstack1'>Pictogram-GitHub</a>
      &nbsp;
      &nbsp;
      &nbsp;
      <a className='footer-links' href='https://www.instagram.com'>Instagram</a>
    </footer>
  </div>
);

export default App;