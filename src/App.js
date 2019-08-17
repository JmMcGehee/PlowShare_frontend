import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Nav } from './components/Nav'
import Home from './components/Home'
import { Index } from './components/Index'
import { New } from './components/New'
import { Edit } from './components/Edit'
import { BASE_URL } from './constants'


class App extends React.Component {
  state = {
    listings : [],
    listing: {}
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
  findListing = (id) => {
    const copyListings = [...this.state.listings]
    const findIndex = this.state.listings.findIndex(listing => listing.id === id)
    this.setState({
      listing: copyListings[findIndex]
    })
  }
  handleUpdate = (event, updatedListing) => {
    event.preventDefault()
    console.log(updatedListing)
    fetch( BASE_URL + `/equipment/${updatedListing.id}`, {
      body: JSON.stringify(updatedListing),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      this.getListings()
    })
    .catch(error => console.log(error))
  }
  handleDelete = (deletedNotice) => {
    fetch( BASE_URL + `/equipment/${deletedNotice.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      this.getListings()
    })
    .catch(error => console.log(error))
  }
  render () {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route path="/home" exact component={Home}/>
          <Route
            path="/index"
            render={(props) =>
              <Index
                {...props}
                listings={this.state.listings}
                findListing={this.findListing}
                listing={this.state.listing}
              />
            }
          />
          <Route
            path="/edit"
            render={(props) =>
              <Edit
                {...props}
                findListing={this.findListing}
                listing={this.state.listing}
                getListings={this.getListings}
                handleUpdate={this.handleUpdate}
                handleDelete={this.handleDelete}
              />
            }
          />
          <Route
            path="/new" component={New}
          />
        </div>
      </Router>
    )
  }
}

export default App;
