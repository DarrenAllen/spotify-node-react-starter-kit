import React, { Component } from 'react';
import Search from "./Search"

class Recommendations extends Component {
  render() {
    return (
      <div className="recommendations">
        <h1>Recommendations</h1>
        <Search />
      </div>
    )
  }
}

export default Recommendations;
