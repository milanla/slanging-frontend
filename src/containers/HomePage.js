import React, { Component } from 'react';
import SlangCard from '../components/SlangCard';
import NavBar from '../components/NavBar';

import { connect } from 'react-redux';

import { fetchSlangs } from '../store/actions/slangActions';

class HomePage extends Component {

  state = {
    search: ''
  }

  handleSearchChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchSlangs(this.state.search)
  }

  showResult = () => {
    let mapSlang

    if (this.props.searchRes.status) {
      return <h3>No slang found</h3>
    } else {
        mapSlang = this.props.searchRes.map(slang => {
        return <SlangCard key={slang.id} slangObj={slang} />
      })
    }

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
        <div id="mainCon">
        <form className="inputField"
        onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Type Slangs"
            autoComplete="off"
            value={this.state.search}
            onChange={this.handleSearchChange}/>
        </form>
        </div>
        <div className="searchResult">
        {this.showResult()}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    searchRes: state.slangReducer.searchRes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSlangs: (state) => dispatch(() => {
      fetchSlangs(dispatch, state)
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
