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
        <div className="formSection">
          <div className="info">
          </div>
            <form
              className="appForm"
              onSubmit={this.handleLoginSubmit}>
              <div className="formHeader">
                <h2>Welcome Back!</h2>
              </div>
              <div>
                <label htmlFor="username"></label>
                <input
                  type="text"
                  name="username"
                  className="inputFields"
                  placeholder="username"
                  autoComplete="off"
                  value={this.state.username}
                  onChange={(e) => this.handleLoginChange(e)} required/>
              </div>
              <div>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  name="password"
                  className="inputFields"
                  placeholder="password"
                  autoComplete="off"
                  value={this.state.password}
                  onChange={(e) => this.handleLoginChange(e)} required/>
              </div>
              <input type="submit" className="submitBtn" value="Login" />
              <div className="linkTo">
                Not a member? <Link to="/signup">Sign up here</Link>
              </div>
            </form>

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
