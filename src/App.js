import React from 'react'
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
        <Show />
        <New />
        <Index
          getListings={this.getListings}
        />
      </>
    )
  }
}

export default App;
