import React, { Component } from 'react';
// import LoginForm from '../components/LoginForm'
import SlangCard from '../components/SlangCard';
import SlangArray from '../SlangArray';
// import { Link } from 'react-router-dom';
import SlangPage from '../components/SlangPage'

class HomePage extends Component {

  state = {
    slangs: SlangArray,
    search: '',
    searchRes: null
  }

  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('here')
    fetch(`http://localhost:3000/slang/${this.state.search}`)
     .then(res => res.json())
     .then(data => this.setState({
       searchRes: data
     }))
  }

  showResult = () => {
    return (
      <div>
        {this.state.searchRes ?
          <SlangPage slangObj={this.state.searchRes} />
          :
          null
        }
      </div>
    )
  }

  render() {
    // debugger
    let mapState = this.state.slangs.map(slang => {
      return <SlangCard key={slang.id} slang={slang} />
    })

    return (
      <React.Fragment>
        <div id="landingPage">
          <h1>STAY HIP</h1>
          <h2>LEARN NEW SLANG</h2>
          <h3>EVERY DAY</h3>
          <div id="arrow">
            <a href="#mainCon"><span></span><span></span><span></span></a>
          </div>
        </div>
        <div id="mainCon">
        <form className="inputField"
        onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Type Slangs"
            autoComplete="off"
            value={this.state.search}
            onChange={this.handleSearch}
            />
        </form>
        </div>
        <div className="searchResult">
        {this.showResult()}
        </div>
      </React.Fragment>
    )
  }
}

export default HomePage
