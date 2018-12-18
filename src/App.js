import React, { Component } from 'react';
import './App.css';
import './hamburger.css';
import './arrow.css';
import HomePage from './containers/HomePage';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends Component {

  state = {
    user: null
  }

  componentDidMount = () => {
    let url = 'http://localhost:3000/api/v1/current_user'
    let token = localStorage.getItem('token')

    if (token) {
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json',
          Authorization: token
        }
      })
        .then(res => res.json())
        .then(user => this.setState({ user: user.user }))
    } else {
      this.props.history.push('/')
    }
  }

  handleSignupSubmit = (e, userInfo) => {
    e.preventDefault()
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
        localStorage.setItem('token', user.jwt)
        this.setState({
          user: user.user
        })
      })
      this.props.history.push('/')
  }

  handleLoginSubmit = (e, userInfo) => {
    e.preventDefault()
    this.login(userInfo)
  }

  login = (userInfo) => {
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
      .then(user => {
        localStorage.setItem('token', user.jwt)
        this.setState({
          user: user.user
        })
      })
      this.props.history.push('/')
  }

  // logout = (e) => {
  //   console.log('here')
  //   localStorage.removeItem("token")
  //   window.location.reload()
  // }

  render() {
    return (
      <React.Fragment>
        <Route path="/" render={(props) => <NavBar history={props.history} user={this.state.user}/>}
        />
        <Switch>
          <Route
            exact path="/"
            render={() => <HomePage user={this.state.user}/> }
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
          <Route
            exact path="/profile"
            render={(props) => <Profile user={this.state.user}
            history={props.history}/>}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
