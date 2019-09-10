import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";


import SplashContainer from './splash/splash_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import UserProfileContainer from './users/user_profile_container';
import PostFormContainer from './post_form/post_form_container';

const Landed = () => {

  return (
    <div>
      <div className="user-profile-container">
        <UserProfileContainer />
      </div>
    </div>
  );
};

// let username = this.state.currentUser

const App = () => (
  <div>
    <header>
      {/* this is a test: {username} */}
      <div className="nav-bar-container">
        <NavBarContainer />
      </div>
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute exact path="/feed" component={UserProfileContainer} />
        <ProtectedRoute path="/users/:userId" component={UserProfileContainer} />
        <ProtectedRoute exact path="/posts/new" component={PostFormContainer} />
        <Redirect to="/" />
      </Switch>
    </header>
    <footer>
      <a
        className="footer-links"
        href="https://github.com/ivopavlov87/Fullstack1"
      >
        Pictogram-GitHub
      </a>
      &nbsp; &nbsp; &nbsp;
      <a className="footer-links" href="https://www.instagram.com">
        Instagram
      </a>
    </footer>
  </div>
);

export default App;