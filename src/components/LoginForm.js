import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
      <div className="mainWrapper">
        <h1>Login</h1>
        <div className="ui segment appForm">
          <form
            className="ui form"
            onSubmit={(e) => this.props.loginFormSubmit(e, this.state)}>
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
    )
  }
}
