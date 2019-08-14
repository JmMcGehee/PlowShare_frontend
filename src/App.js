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
    listings : []
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
      <Router>
        <div className="container">
          <Nav />
          <Route path="/" exact component={Home}/>
          <Route
            path="/index"
            render={(props) =>
              <Index
                {...props}
                listings={this.state.listings}
              />
            }
          />
          <Route
            path="/new" component={New}
          />
          <Route
            path="/edit" component={Edit}
          />
        </div>
      </Router>
    )
  }
}

export default App;
