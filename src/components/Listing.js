import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Show } from "./Show"

class Listing extends Component {
  state = {
    showListing: false,
    listing: {}
  }
  toggleShow = () => {
    this.setState({
      showListing: !this.state.showListing
    })
  }
  findListing = (id) => {
    const copyListings = [...this.props.listings]
    const findIndex = this.props.listings.findIndex(listing => listing.id === id)
    this.setState({
      listing: copyListings[findIndex]
    })
  }
  componentDidMount () {
    this.findListing(this.props.listingId)
  }
  render () {
    return (
      <>
      {
        this.state.showListing ?
        <div>
          <h3>{this.state.listing.title}</h3>
          <img src={this.state.listing.img} alt={this.state.listing.title}/>
          <h5>Description</h5>
          <p>{this.state.listing.year} {this.state.listing.make} {this.state.listing.model}</p>
          <h4>Rate</h4><p>${this.state.listing.rate}/day</p>
          <Show />
          <button onClick={this.toggleShow}>Close</button>
          <Link to="/edit">Edit Listing</Link>
        </div>
        :
        <div>
          <h3>{this.props.listing.title}</h3>
          <img src={this.props.listing.img} alt={this.props.listing.title}/>
          <h4>Rate</h4><p>${this.props.listing.rate}/day</p>
          <button onClick={this.toggleShow}>See Full Listing</button>
        </div>
      }
      </>
    )
  }
}

export { Listing }
