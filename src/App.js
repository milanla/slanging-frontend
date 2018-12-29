import React, { Component } from 'react';

import './css/App.css';
import './css/App.css';
import './css/hamburger.css';
import './css/form.css'
import './css/slangform.scss'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './containers/HomePage';
import Profile from './components/Profile';
import NewSlangForm from './components/NewSlangForm';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

import { connect } from 'react-redux';

import { getCurrentUser } from './store/actions/adapter';

class App extends Component {

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    if (token) {
      this.props.currentUser(token)
    }
  }

  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUpForm}/>
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/addslang" component={NewSlangForm}/>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: (token) => dispatch((dispatch) => {
      getCurrentUser(dispatch, token)
    })
  }
}

export default connect(null, mapDispatchToProps)(App);
