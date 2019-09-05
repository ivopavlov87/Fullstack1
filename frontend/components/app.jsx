import React from 'react';
import { Provider } from 'react-redux';


import SplashContainer from './splash/splash_container';


const App = () => (
  <div>
    <header>
      <SplashContainer />
    </header>
    <footer>
      Links for: GitHub Repot, Instagram, About Page(?)
    </footer>
  </div>
);

export default App;