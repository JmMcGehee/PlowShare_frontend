import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Nav extends Component {
  render () {
    return (
      <>
        <h3>Nav Component</h3>
        <nav>
          <Link to="/">Index</Link>
          <Link to="/show">Show</Link>
          <Link to="/new">New</Link>
        </nav>
      </>
    )
  }
}

export { Nav }
