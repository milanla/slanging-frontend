import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <div className="ui secondary menu">
        <div className="ui item">
          <div id="menuToggle">

            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/signup'>Sign Up</Link>
              </li>
              <li>
                {this.props.user ?
                  <div>Logout</div>
                  :
                  <Link to='/login'>Login</Link>
                }
              </li>
            </ul>
          </div>
        </div>
        <div className="right menu">
          <div className="ui item">
            {this.props.user ? 'Hi ' + this.props.user.username : null }
          </div>
          <div className="ui item">
            <i className="user circle outline large icon"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar)
