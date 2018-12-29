import React, { Component } from 'react';
import NavBar from './NavBar';
import SlangCard from './SlangCard';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from '../store/actions/adapter';
import { fetchUserSlangs } from '../store/actions/slangActions'



class Profile extends Component {

  componentDidMount() {
    let token = localStorage.getItem('token')

    if (token) {
      console.log('in component did mount')
      this.props.currentUser(token)
    }
  }

  componentDidUpdate(prevProps) {
    // debugger

    if (this.props !== prevProps && this.props.slangs.length === 0) {
      console.log('in component did update')
      this.props.userSlangs(this.props.user.username)
    }
  }

  showResult = () => {
    let mapSlang = this.props.slangs.map(slang => {
        return <SlangCard key={slang.id} slangObj={slang} />
      })

    return (
      <div>
        {mapSlang}
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="profileCon">
          <h1>{this.props.user ? this.props.user.username + "'s" : 'Yo'} Slangs</h1>
          <div className="addNewSlangBtn">
          <Link to="/addslang"><img src="https://cdn.iconscout.com/icon/free/png-256/add-insert-control-point-plus-31700.png" alt="add new slang button" /></Link>
          <p>Add new slang</p>
          </div>
          <div className="slangCardCon">
            {this.showResult()}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    slangs: state.slangReducer.slangs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: (token) => dispatch((dispatch) => {
      getCurrentUser(dispatch, token)
    }),
    userSlangs: (username) => dispatch(() => {
      fetchUserSlangs(dispatch, username)
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
