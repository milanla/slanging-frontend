import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearUser } from '../store/actions/userActions'

class NavBar extends Component {

  logout = (e) => {
    console.log('log out')
    localStorage.removeItem("token")
    this.props.logout()
    alert('Successfully logout')
    this.props.clearSearch()
    this.props.history.push('/')
  }

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
                {this.props.user ?
                  null
                  :
                  <Link to='/signup'>Sign Up</Link>
                }
              </li>
              <li>
                {this.props.user ?
                  <div onClick={this.logout}>Logout</div>
                  :
                  <Link to='/login'>Login</Link>
                }
              </li>
            </ul>
          </div>
        </div>
        <div className="right menu">
          <div className="ui item">
            {this.props.user ? 'Hi ' + this.props.user.username + '!': null }
          </div>
          <div className="ui item">
            {this.props.user ?
              <Link to="/profile"><i className="user circle outline large icon" onClick={this.props.clearSearch}></i></Link>
              :
              null
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(clearUser()),
    clearSearch : () => dispatch({ type:'CLEAR_SEARCH' })
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
