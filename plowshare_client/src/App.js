import React from 'react';
import { BASE_URL } from './constants'
import './App.css';


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
