import React, { Component } from 'react'
import { BASE_URL } from '../constants'

class Index extends Component {
  state = {
    listings: []
  }
  componentDidMount () {
    this.getListings()
  }
  getListings () {
    fetch( BASE_URL + '/equipment')
    .then(response => response.json())
    .then(json => this.setState({
      listings: json,
    }))
    .catch(error => console.log(error))
  }
  render () {
    return (
      <>
        <h1>Index Page</h1>
        {
          this.state.listings.map(
            equipment =>
              <div key={equipment.id}>
                <h3>{equipment.title}</h3>
                <img src={equipment.img} alt={equipment.title}/>
                <h5>Description</h5>
                <p>{equipment.year} {equipment.make} {equipment.model}</p>
                <h4>Rate</h4><p>${equipment.rate}/day</p>
              </div>
          )
        }
      </>
    )
  }
}

export { Index }
