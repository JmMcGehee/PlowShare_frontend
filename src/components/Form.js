import React, { Component } from 'react'
import { BASE_URL } from '../constants'

class Form extends Component {
  state = {
    title: '',
    img: '',
    make: '',
    model: '',
    year: 0,
    rate: 0,
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const newListing = {
      title: this.state.title,
      img: this.state.img,
      make: this.state.make,
      model: this.state.model,
      year: this.state.year,
      rate: this.state.rate
    }
    console.log(newListing)
    fetch( BASE_URL + '/equipment', {
      body: JSON.stringify(newListing),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdListing => createdListing.json())
    .then(jsonedListing => console.log(jsonedListing))
    .catch(error => console.log(error))
  }
  render () {
    return (
      <div>
        <h3>Create a New Listing</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            id="title"/>
          <br/>
          <label htmlFor="img">Image URL:</label>
          <input
            type="text"
            value={this.state.img}
            onChange={this.handleChange}
            id="img"/>
          <br/>
          <label htmlFor="make">Make:</label>
          <input
            type="text"
            value={this.state.make}
            onChange={this.handleChange}
            id="make"/>
          <br/>
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            value={this.state.model}
            onChange={this.handleChange}
            id="model"/>
          <br/>
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            value={this.state.year}
            onChange={this.handleChange}
            id="year"/>
          <br/>
          <label htmlFor="rate">Cost per Day:</label>
          <input
            type="number"
            value={this.state.rate}
            onChange={this.handleChange}
            id="rate"/>
          <br/>
          <input
            type="submit"
          />
        </form>
      </div>
    )
  }
}

export { Form }
