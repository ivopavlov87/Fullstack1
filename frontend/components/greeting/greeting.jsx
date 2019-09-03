import React from 'react';
import { Link } from 'react-router-dom';

import SignUpFormContainer from '../session_form/signup_form_container';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div> 
      <p>You see this when not logged in! greeting.jsx</p>
      <nav className="login-signup">
        <Link to="/login">Login</Link>
        &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
      </nav>
    </div>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}! we're in the greeting.jsx</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
