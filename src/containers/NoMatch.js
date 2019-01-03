import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="noMatchCon">
        <iframe src="https://giphy.com/embed/8L0Pky6C83SzkzU55a" width="350" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p style={{ color: 'white' }}>via GIPHY</p>
        <h2>Page not found</h2>
        <div className="ui button"><Link to="/">Click here to go back to home page</Link></div>
      </div>
    </React.Fragment>
  )
}

export default NoMatch;
