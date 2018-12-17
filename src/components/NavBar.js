import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <div className="ui secondary menu">
        <button
          onClick={() => this.props.history.push(`/`)}
          className="item">
          Home
        </button>
        <button className="item">
          Slangs
        </button>
        <div className="right menu">
          <div className="ui item">
            {this.props.user ? 'Hi ' + this.props.user.username : null }
          </div>
          <div className="ui item">
            { this.props.user ? 'Logout' : 'Login' }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar)
