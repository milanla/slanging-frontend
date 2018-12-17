import React, { Component } from 'react';
// import LoginForm from '../components/LoginForm'
import SlangCard from '../components/SlangCard'
import SlangArray from '../SlangArray'

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
        <h1> Welcome </h1>
          {mapState}
      </div>
    )
  }
}

export default HomePage
