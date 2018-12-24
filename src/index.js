import React from 'react';
import ReactDOM from 'react-dom';
import './index.js';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import userReducer from './store/reducers/userReducer'
import slangReducer from './store/reducers/slangReducer'

import App from './App';
import * as serviceWorker from './serviceWorker';

import '../node_modules/semantic-ui/dist/semantic.min.css';


const rootReducer = combineReducers({ userReducer, slangReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
