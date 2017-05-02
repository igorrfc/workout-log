import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import reducers from './reducers';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(logger);

let store = createStore(
  reducers,
  composeEnhancers(middlewares),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
