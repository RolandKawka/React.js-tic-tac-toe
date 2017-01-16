import React, { Component } from 'react';
import './Tile.css';

export default class Tile extends Component {
  tileClick(props) {
    props.updateBoard(props.turn, props.index);
  }

  render() {
    return (
      <div className="tile" onClick = { () => this.tileClick(this.props)}>
        <p>{this.props.value}</p>
      </div>
    )
  }


}
