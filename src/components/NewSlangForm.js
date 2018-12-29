import React, { Component } from 'react';
import NavBar from './NavBar';

import { connect } from 'react-redux';
import { getCurrentUser } from '../store/actions/adapter';

class NewSlangForm extends Component {

  state = {
    term: '',
    definition: '',
    example: '',
  }

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    if (token) {
      this.props.currentUser(token)
    } else {
      this.props.history.push('/login')
    }
  }

  handleNewSlangFormChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('in handle submit')
    let options = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token') },
          body: JSON.stringify({
            user_id: this.props.user.id,
            term: this.state.term,
            definition: this.state.definition,
            example: this.state.example
          })
        }
        fetch("http://localhost:3000/slangs", options)
        this.setState({
          term: '',
          definition: '',
          example: ''
        })
  }

  render() {
    return (
      <div>
        <NavBar />
          <form
            className="slangForm"
            onSubmit={this.handleSubmit}>
            <input
              id="input-1"
              type="text"
              name="term"
              placeholder="Slang term"
              onChange={this.handleNewSlangFormChange}
              autoComplete="off"
              required
              autoFocus />
            <label htmlFor="input-1">
              <span className="label-text">Term</span>
              <span className="nav-dot"></span>
              <div className="add-button-trigger" style={{color: 'white'}}>Add New Slang</div>
            </label>
            <input
              id="input-2"
              type="text"
              name="definition"
              placeholder="Definition"
              onChange={this.handleNewSlangFormChange}
              autoComplete="off"
              required />
            <label htmlFor="input-2">
              <span className="label-text">Definition</span>
              <span className="nav-dot"></span>
            </label>
            <input
              id="input-3"
              type="text"
              name="example"
              placeholder="Example"
              onChange={this.handleNewSlangFormChange}
              autoComplete="off"
              required />
            <label htmlFor="input-3">
              <span className="label-text">Example</span>
              <span className="nav-dot"></span>
            </label>
            <button type="submit">Submit</button>
            <p className="tip">Press Tab</p>
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: (token) => dispatch((dispatch) => {
      getCurrentUser(dispatch, token)
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSlangForm);
