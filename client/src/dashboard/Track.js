import React, { Component } from 'react';
import SpotifyImages from "./SpotifyImages"
class Track extends Component {
  render() {
    return (
      <li>
        <div className="wrapper">
          <div><SpotifyImages images={this.props.data.album.images} /></div>
          <div>{this.props.data.name}</div>
        </div>
      </li>
    )
  }
}

export default Track;
