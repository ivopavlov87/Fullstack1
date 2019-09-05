//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';



document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // FOR TESTING - REMOVE
  window.getState = store.getState
  window.dispatch = store.dispatch
  // FOR TESTING - REMOVE



  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});