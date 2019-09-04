import React from 'react';
import { Provider } from 'react-redux';

// import {
//   Switch
// } from 'react-router-dom';
// import { AuthRoute } from '../util/route_util';

import SplashContainer from './splash/splash_container';

// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <header>
      <h1>This is inside app.jsx</h1>
      <SplashContainer />
    </header>
    {/* <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch> */}
  </div>
);

export default App;