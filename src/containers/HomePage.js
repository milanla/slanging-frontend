import React, { Component } from 'react';
import SlangCard from '../components/SlangCard';
import NavBar from '../components/NavBar';
import { animateScroll as scroll } from 'react-scroll';

import { connect } from 'react-redux';

import { fetchSlangs } from '../store/actions/slangActions';

class HomePage extends Component {

  state = {
    search: '',
    loading: false
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.searchRes[0] !== this.props.searchRes[0]) {
      // debugger
      this.setState({ loading: false })
      scroll.scrollTo(620)
    }
  }

  handleSearchChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchSlangs(this.state.search)
    this.setState({ loading: true })
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
          <div id="welcomeText">
            <iframe
              src="https://giphy.com/embed/xlYKItjhiDsY" width="480"
              height="270"
              frameBorder="0"
              title="welcomeGif">
              </iframe>
            <p style={{ color: 'white' }}>via GIPHY</p>
            <h2>Learn New Slangs</h2>
          </div>
          <form className="inputField"
          onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="search"
              placeholder="START SEARCHING..."
              autoComplete="off"
              value={this.state.search}
              onChange={this.handleSearchChange}/>
          </form>
          </div>
          <div className="searchResult">
          { this.state.loading === true ?
            <div>
              <p></p>
              <div className="ui active inverted dimmer">
                <div className="ui loader"></div>
              </div>
            </div>
            :
            this.showResult()}
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
