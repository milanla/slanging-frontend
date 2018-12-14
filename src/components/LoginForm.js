import React, { Component } from 'react';

export default class LoginFrom extends Component {

  state = {
    username: '',
    password: ''
  }

  handleLoginChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={(e) => this.props.loginFormSubmit(e, this.state)}>
          <label> Username </label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={(e) => this.handleLoginChange(e)}/>
          <label> Password </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={(e) => this.handleLoginChange(e)}/>
          <button>Log in</button>
        </form>
      </div>
    )
  }
}
