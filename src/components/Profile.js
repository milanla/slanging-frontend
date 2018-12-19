import React, { Component } from 'react';

class Profile extends Component {

  componentDidMount() {
    let url = 'http://localhost:3000/api/v1/current_user'
    let token = localStorage.getItem('token')

    if (token) {
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json',
          Authorization: token
        }
      })
        .then(res => res.json())
        .then(user => this.setState({ user: user.user }))
    } else {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className="profileCon">
          <h1>Yo Slangs</h1>        
      </div>
    )
  }
}

export default Profile;
