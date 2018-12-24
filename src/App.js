import React, { Component } from 'react';

import './css/App.css';
import './css/App.css';
import './css/hamburger.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './containers/HomePage';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import NewSlangPage from './containers/NewSlangPage';

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
        <Route exact path="/new_slang" component={NewSlangPage}/>
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
