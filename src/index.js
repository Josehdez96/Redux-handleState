import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './css/iconos.css';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import AllReducers from './reducers';

const store = createStore(
  AllReducers,
  {} /* Estado inicial*/,
  applyMiddleware(reduxThunk) // Middleware sirve para hacer llamadas asyncronas/promesas
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
