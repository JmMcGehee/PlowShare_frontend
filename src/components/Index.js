import React, { Component } from 'react'
import { Listing } from './Listing'


class Index extends Component {
  state = {
    listings: []
  }
  render () {
    return (
      <div className="index">
        {
          this.props.listings.map(
            equipment =>
            <div key={equipment.id}>
            <Listing
              listings={this.state.listings}
              listingId={equipment.id}
              title={equipment.title}
              img={equipment.img}
              year={equipment.year}
              make={equipment.make}
              model={equipment.model}
              rate={equipment.rate}
            />
            </div>
          )
        }
      </div>
    )
  }
}

export { Index }
