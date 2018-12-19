import React, { Component } from 'react';
// import LoginForm from '../components/LoginForm'
// import SlangCard from '../components/SlangCard';
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
          <SlangPage slangObj={this.state.searchRes} searchText={this.state.search} />
          :
          null
        }
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div id="landingPage">
          <div className="bg">
            <img src="https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80.jpg" alt="bg" />
          </div>
          <h1>STAY HIP</h1>
          <h2>LEARN NEW SLANG EVERY DAY</h2>
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
            onChange={this.handleSearch}/>
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
