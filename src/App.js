import React from 'react';
import { BASE_URL } from './constants'
import './App.css';
import { Nav } from './components/Nav'
import { Index } from './components/Index'
import { Show } from './components/Show'
import { New } from './components/New'


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
        <Nav />
        <Index />
        <Show />
        <New />
      </>
    )
  }
}

export default App;
