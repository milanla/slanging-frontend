import React, { Component } from 'react';

class MainContainer extends Component {

  render() {
    return (
      <div>
        <h1> Welcome </h1>
        Hello {this.props.user.username}
      </div>
    )
  }
}

export default MainContainer;
