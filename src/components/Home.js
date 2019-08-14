import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div className="home">
      <Link to="/new">List</Link>
      <Link to="/index">Rent</Link>
      <Link to="#">Posper</Link>
    </div>
  )
}

export default Home
