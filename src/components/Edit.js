import React, { Component } from 'react'
import { Form } from './Form'

class Edit extends Component {
  state = {
    formVisible: false
  }
  render () {
    return (
      <>
        <h3>Edit Listing</h3>
        <Form />
      </>
    )
  }
}

export { Edit }
