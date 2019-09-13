import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";


import SplashContainer from './splash/splash_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import UserProfileContainer from './users/user_profile_container';
import PostFormContainer from './post_form/post_form_container';
import PostShowContainer from './post_show/post_show_container';
import FeedContainer from './feed/feed_container';

const App = () => (
  <div>
    <header>
      <div className="nav-bar-container">
        <NavBarContainer />
      </div>
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute exact path="/feed" component={FeedContainer} />
        <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
        <ProtectedRoute exact path="/posts/new" component={PostFormContainer} />
        <ProtectedRoute exact path="/posts/:postId" component={PostShowContainer} />
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