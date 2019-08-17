import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Show } from "./Show"

class Listing extends Component {
  state = {
    showListing: false,
    listing: {}
  }
  toggleShow = () => {
    this.props.findListing(this.props.listingId)
    this.setState({
      showListing: !this.state.showListing
    })
  }
  componentDidMount () {
    this.setState({
      listing: this.props.listing
    })
  }
  render () {
    return (
      <>
      {
        this.state.showListing ?
        <div className="show-container">
          <h3>{this.state.listing.title}</h3>
          <img
            src={this.state.listing.img} alt={this.state.listing.title}
            className="show-image"
          />
          <h5>Description</h5>
          <p>{this.state.listing.year} {this.state.listing.make} {this.state.listing.model}</p>
          <h4>Rate</h4><p>${this.state.listing.rate}/day</p>
          <h5>Location</h5><p>{this.state.listing.location}</p>
          <Show />
          <button onClick={this.toggleShow}>Close</button>
          <Link to="/edit">Edit Listing</Link>
        </div>
        :
        <div className="index-container">
          <h3>{this.props.listing.title}</h3>
          <img
            src={this.props.listing.img} alt={this.props.listing.title}
            className="index-image"
          />
          <h4>Rate</h4><p>${this.props.listing.rate}/day</p>
          <button onClick={this.toggleShow}>See Full Listing</button>
        </div>
      }
      </>
    )
  }
}

export { Listing }
