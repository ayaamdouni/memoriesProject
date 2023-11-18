import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import {reducers} from './reducers';
import App from './App';

const store = configureStore({
  reducer: reducers,
  // Any additional middleware or options can be added here
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
