import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import './assets/css/global.css';
import App from './layout/Main.jsx';
import * as serviceWorker from './serviceWorker';

import reducers from './store/reducers.js'

const history = createBrowserHistory()
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
