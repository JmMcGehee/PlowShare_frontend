import React from 'react'

function Search(props) {
  return (
    <div className="search-container">
      <form action="" className="search-form">
        <h3>Book Equipment:</h3>
        <div>
          <label htmlFor="">Location</label><br/>
          <input type="text" name="location"/>
        </div>
        <div>
          <label htmlFor="">Start Date</label><br/>
          <input type="text" name="start-date"/>
        </div>
        <div>
          <label htmlFor="">End Date</label><br/>
          <input type="text" name="end-date"/>
        </div>
      </form>
    </div>
  )
}

export default Search
