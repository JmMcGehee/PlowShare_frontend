import React from 'react';
import logo from './logo.svg';
import './App.css';
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
    .then(json => console.log(json))
    .catch(error => console.log(error))
  }
  render () {
    return (
      <>
        <h1>There's stuff here, I swear.</h1>
      </>
    )
  }
}

export default App;
