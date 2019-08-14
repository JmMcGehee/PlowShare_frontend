import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Show } from "./Show"

class Listing extends Component {
  state = {
    showListing: false,
    listing: {}
  }
  toggleShow = () => {
    this.findListing(this.props.listingId)
    //This is coming back as undefined. 
    this.setState({
      showListing: !this.state.showListing
    })
  }
  findListing = (id) => {
    const copyListings = [...this.props.listings]
    const findIndex = this.props.listings.findIndex(listing => listing.id === id)
    console.log(copyListings[findIndex])
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
          <Show />
          <button onClick={this.toggleShow}>Close</button>
          <Link to="/edit">Edit Listing</Link>
        </div>
        :
        <div>
          <h3>{this.props.title}</h3>
          <img src={this.props.img} alt={this.props.title}/>
          <h5>Description</h5>
          <p>{this.props.year} {this.props.make} {this.props.model}</p>
          <h4>Rate</h4><p>${this.props.rate}/day</p>
          <button onClick={this.toggleShow}>See Full Listing</button>
        </div>
      }
      </>
    )
  }
}

export { Listing }
