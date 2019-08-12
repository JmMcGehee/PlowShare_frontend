import React, { Component } from 'react'
import { Form } from './Form'

class New extends Component {
  state = {
    formVisible: false
  }
  toggleForm = () => {
    this.setState({formVisible: !this.state.formVisible})
  }
  render () {
    return (
      <>
        <h3>New Page</h3>
        {
          this.state.formVisible ? <Form />
          :
          <button onClick={this.toggleForm}>
              Add New Listing
          </button>
        }
      </>
    )
  }
}

export { New }
