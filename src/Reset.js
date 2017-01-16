import React, { Component } from 'react';
import './Reset.css';

export default class Reset extends Component {

  render() {
    return (
      <button className="reset-btn" onClick = {this.props.resetGame} >Reset</button>
    )
  }


}
