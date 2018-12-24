import React, { Component } from 'react';
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
      <div className="mainWrapper">
        <h1>Sign Up</h1>
        <div className="ui segment appForm">
          <form
            className="ui form"
            onSubmit={this.handleSignUpSubmit}>
            <div className="field">
              <label> Username </label>
              <input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={(e) => this.handleSignupChange(e)}/>
            </div>
            <div className="field">
              <label> Password </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={(e) => this.handleSignupChange(e)}/>
            </div>
            <button className="fluid ui button">Create new account</button>
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
