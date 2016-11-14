import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import { Provider } from 'react-redux';
import { configureStore, runSagas } from './store';
import throttle from 'lodash/throttle';
import { loadState, saveState } from 'utils/localStorage';
import App from 'containers/App';

/* Sagas */
// import { appData } from 'containers/App/sagas';

const initialState = {};
const persistedState = loadState();

const store = configureStore(persistedState);

store.subscribe( throttle (() => {
  saveState(store.getState());
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('weather-widget')
);

/* MOUNT SAGAS */
// runSagas([
//   appData,
// ]);
