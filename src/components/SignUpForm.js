import React, { Component } from 'react';
import NavBar from './NavBar';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { signUpSubmit } from '../store/actions/adapter';

class SignUpForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSignupChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUpSubmit = (e) => {
    e.preventDefault()
    this.props.signUpFromSubmit(this.state)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="formSection">
          <div className="info">
          </div>
          <form
            className="appForm"
            onSubmit={this.handleSignUpSubmit}>
            <div className="formHeader">
              <h2>Help your homie learn slang</h2>
              <h3>Sign up here</h3>
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
                onChange={this.handleSignupChange} required/>
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
                onChange={this.handleSignupChange} required/>
            </div>
            <input type="submit" className="submitBtn" value="Sign Up" />
            <div className="linkTo">
              Already a member? <Link to="/login">Login here</Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpFromSubmit: (state) => dispatch(() => {
      signUpSubmit(dispatch, state)
    })
  }
}

export default connect(null, mapDispatchToProps)(SignUpForm);
