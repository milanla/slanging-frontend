import React, { Component } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { loginSubmit } from '../store/actions/adapter'

class LoginForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleLoginChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.props.loginFormSubmit(this.state)
    this.props.clearSearch()
    this.props.history.push('/')
  }

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <div className="mainWrapper">
          <h1>Login</h1>
          <div className="ui segment appForm">
            <form
              className="ui form"
              onSubmit={this.handleLoginSubmit}>
              <div className="field">
                <label> Username </label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={(e) => this.handleLoginChange(e)}/>
              </div>
              <div className="field">
                <label> Password </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={(e) => this.handleLoginChange(e)}/>
              </div>
              <button className="fluid ui button">Login</button>
            </form>
            <p>Not a member? <Link to="/signup">Sign up here</Link></p>
          </div>
      </div>
    </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginFormSubmit: (state) => dispatch(() => {
        loginSubmit(dispatch, state)
    }),
    clearSearch: () => dispatch({ type:'CLEAR_SEARCH' })
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);
