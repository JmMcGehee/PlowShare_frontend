import React from 'react';
import './App.css';
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
      <>
        <Nav />
        <Index
          getListings={this.getListings}
        />
        <Show />
        <New />
      </>
    )
  }
}

export default App;
