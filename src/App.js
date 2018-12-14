import React, { Component } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends Component {

  state = {
    user: {}
  }

  componentDidMount = () => {
    let url = 'http://localhost:3000/api/v1/current_user'
    let token = localStorage.getItem('token')

    if (token) {
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: token
        }
      })
    } else {
      this.props.history.push('/login')
    }
  }

  handleSignupSubmit = (e, userInfo) => {
    e.preventDefault()
    // once the user submit, we need to create a user
    this.createUser(userInfo)
  }

  createUser = (userInfo) => {
    let url = 'http://localhost:3000/api/v1/users'

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: userInfo.username,
          password: userInfo.password
        }
      })
    })
      .then(res => res.json())
      .then(user => {
        console.log(user)
        localStorage.setItem('token', user.user.id)
        this.setState({
          user: user.user
        })
      })
  }

  handleLoginSubmit = (e, userInfo) => {
    // console.log(userInfo)
    e.preventDefault()
    this.login(userInfo)
  }

  login = (userInfo) => {
    console.log(userInfo)
    let url = 'http://localhost:3000/api/v1/login'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        user: userInfo
      })
    })
      .then(res => res.json())
      .then(console.log)
  }

  render() {
    return (
      <div>
      <Switch>
        <Route
          exact path="/"
          render={() => <MainContainer user={this.state.user}/> }
        />
        <Route
          exact path="/signup"
          render={() => <SignUpForm signupFormSubmit={this.handleSignupSubmit}/> }
        />
        <Route
          exact path="/login"
          render={() => <LoginForm
          loginFormSubmit={this.handleLoginSubmit}/> }
        />
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
