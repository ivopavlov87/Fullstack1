import React from 'react';
import { Link } from 'react-router-dom'
import { Provider } from 'react-redux';


import SplashContainer from './splash/splash_container';


const App = () => (
  <div>
    <header>
      <SplashContainer />
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