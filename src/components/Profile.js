import React, { Component } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from '../store/actions/adapter';


class Profile extends Component {

  componentDidMount() {
    let token = localStorage.getItem('token')

    if (token) {
      this.props.currentUser(token)
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="profileCon">
          <h1>Yo Slangs</h1>
          <div className="slangCardCon">
            <p>Cards go here</p>
          </div>
          <div className="addNewSlangBtn">
            <Link to="/new_slang"><img src="https://cdn.iconscout.com/icon/free/png-256/add-insert-control-point-plus-31700.png" alt="add new slang button" /></Link>
            <p>Add new slang</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: (token) => dispatch((dispatch) => {
      getCurrentUser(dispatch, token)
    })
  }
}

export default connect(null, mapDispatchToProps)(Profile);
