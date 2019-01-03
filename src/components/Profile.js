import React, { Component } from 'react';
import NavBar from './NavBar';
import SlangCard from './SlangCard';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from '../store/actions/adapter';
import { fetchUserSlangs } from '../store/actions/slangActions';
import { fetchLikedSlang } from '../store/actions/slangActions';


class Profile extends Component {

  componentDidMount() {
    if (this.props.user && this.props.slangs.length === 0 || this.props.user && this.props.likeSlangs.length === 0) {
      this.props.userSlangs(this.props.user.username)
      this.props.userLikes(this.props.user.username)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user && this.props.slangs.length === 0 || prevProps.user !== this.props.user && this.props.likeSlangs.length === 0) {
      this.props.userSlangs(this.props.user.username)
      this.props.userLikes(this.props.user.username)
    }
  }

  render() {
    let mapSlang = this.props.slangs.map(slang => {
        return <SlangCard key={slang.id} slangObj={slang} />
      })

    let mapLikes = this.props.likeSlangs.map(slang => {
      // debugger
      return <SlangCard key={slang.author} slangObj={slang} liked={true} />
    })

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
            <h2><i className="keyboard outline icon"></i></h2>
            {mapSlang}
          </div>
          <div className="likeCon">
            <h2><i className="heart outline icon"></i></h2>
            {mapLikes}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    slangs: state.slangReducer.slangs,
    likeSlangs: state.slangReducer.likedSlangs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: (token) => dispatch((dispatch) => {
      getCurrentUser(dispatch, token)
    }),
    userSlangs: (username) => dispatch(() => {
      fetchUserSlangs(dispatch, username)
    }),
    userLikes: (username) => dispatch(() => {
      fetchLikedSlang(dispatch, username)
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
