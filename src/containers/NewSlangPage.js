import React, { Component } from 'react';
import NewSlangForm from '../components/NewSlangForm'

export default class NewSlangPage extends Component {
  render() {
    return (
      <div className="newSlangForm">
        <h1>Add New Slang</h1>
        <div>
          <NewSlangForm />
        </div>
      </div>
    )
  }

}
