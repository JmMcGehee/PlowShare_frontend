import React, { Component } from 'react'

class Edit extends Component {
  state = {
    listing: {},
    title: '',
    img: '',
    make: '',
    model: '',
    year: 0,
    location: '',
    rate: 0,
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleUpdate = (event) => {
    const updatedListing = {
      title: this.state.title,
      img: this.state.img,
      make: this.state.make,
      model: this.state.model,
      year: this.state.year,
      location: this.state.location,
      rate: this.state.rate,
      id: this.state.listing.id
    }
    this.props.handleUpdate(event, updatedListing)
  }
  componentDidMount () {
    this.setState({
      listing: this.props.listing || '',
      title: this.props.listing.title || '',
      img: this.props.listing.img || '',
      make: this.props.listing.make || '',
      model: this.props.listing.model || '',
      year: this.props.listing.year || '',
      location: this.props.listing.location || '',
      rate: this.props.listing.rate || '',
    })
  }
  render () {
    return (
      <>
        <div>
          <h3>Edit Listing</h3>
          <form onSubmit={this.handleUpdate}>
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
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              value={this.state.location}
              onChange={this.handleChange}
              id="location"/>
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
          <button
            onClick={()=> this.props.handleDelete(this.state.listing)
            }>
            Delete this Listing
          </button>
        </div>
      </>
    )
  }
}

export { Edit }
