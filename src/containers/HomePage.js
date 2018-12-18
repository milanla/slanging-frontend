import React, { Component } from 'react';
// import LoginForm from '../components/LoginForm'
import SlangCard from '../components/SlangCard';
import SlangArray from '../SlangArray';
// import { Link } from 'react-router-dom';

class HomePage extends Component {

  state = {
    slangs: SlangArray
  }

  render() {
    // debugger
    let mapState = this.state.slangs.map(slang => {
      return <SlangCard key={slang.id} slang={slang} />
    })

    return (
      <div>
        <div id="landingPage">
          <h1> Welcome </h1>
          <div id="arrow">
            <a href="#mainCon"><span></span><span></span><span></span></a>
          </div>
        </div>
        <div id="mainCon" className="slangCon">
          {mapState}
        </div>
      </div>
    )
  }
}

export default HomePage
