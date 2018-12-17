import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';

// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'

import App from './App';
import * as serviceWorker from './serviceWorker';

import '../node_modules/semantic-ui/dist/semantic.min.css';

// const store = createStore(reducer, applyMiddleware(thunk))
// wrap with <Provider store={store}> to use redux

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
