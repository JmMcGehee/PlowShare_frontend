import React, { Component } from 'react'
import { Listing } from './Listing'
import Search from './Search'

class Index extends Component {
  state = {
    listings: []
  }
  render () {
    return (
      <>
      <Search />
      <div className="index">
        {
          this.props.listings.map(
            equipment =>
            <div key={equipment.id}>
            <Listing
              listing={equipment}
              listings={this.props.listings}
              listingId={equipment.id}
              title={equipment.title}
            />
            </div>
          )
        }
      </div>
      </>
    )
  }
}

export { Index }
