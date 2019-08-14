import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Nav extends Component {
  render () {
    return (
      <div className="nav">
        <header>
        <h3>Nav Component</h3>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/index">Listings</Link>
          <Link to="/new">New</Link>
          <Link>| Log in |</Link>
          <Link>| Sign up |</Link>
        </nav>
        <h1>PlowShare</h1>
        </header>
      </div>
    )
  }
}

export { Nav }
