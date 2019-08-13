import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Nav } from './components/Nav'
import { Index } from './components/Index'
import { Show } from './components/Show'
import { New } from './components/New'


class App extends React.Component {
  state = {
    listings : []
  }
  render () {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route path="/" exact component={Index}
            getListings={this.getListings}
          />
          <Route path="/show" component={Show} />
          <Route path="/new" component={New} />
        </div>
      </Router>
    )
  }
}

export default App;
