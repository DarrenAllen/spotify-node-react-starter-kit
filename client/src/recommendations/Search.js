import React, { Component } from 'react';

import SearchQuery from "./SearchQuery"

class Search extends Component {
  render() {
    return (
      <div>
        <h2>Search for things</h2>
        <SearchQuery type="artist"/>
        <SearchQuery type="track"/>
      </div>
    )
  }
}

export default Search;
