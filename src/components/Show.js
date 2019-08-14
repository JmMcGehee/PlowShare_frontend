import React, { Component } from 'react'
import { Calendar } from './Calendar/Calendar'

class Show extends Component {
  state = {
    day: []
  }
  onDayClick = (event, day) => {
    this.setState({
      day: [...this.state.day, day]
    })
  }
  render () {
    return (
      <>
        <h2>Show Page</h2>
        <Calendar
          onDayClick={(event, day) => {
            this.onDayClick(event, day)
          }}
        />
      </>
    )
  }
}

export { Show }
