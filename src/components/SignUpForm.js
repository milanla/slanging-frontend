import React, { Component } from 'react';

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

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={(e) => this.props.signupFormSubmit(e, this.state)}>
          <label> Username </label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={(e) => this.handleSignupChange(e)}/>
          <label> Password </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={(e) => this.handleSignupChange(e)}/>
          <button>Create new account</button>
        </form>
      </div>
    )
  }
}

export default SignUpForm;
