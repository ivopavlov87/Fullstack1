import React from 'react';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
  <Provider store={store}>
      <h1>Hello from React!</h1>
  </Provider>
);

export default Root;