import React, { Component } from 'react';
import './App.css';

import Tile from './Tile.js';
import Reset from './Reset.js';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gameBoard: [
        '', '', '',
        '', '', '',
        '', '', ''
      ],
      turn: 'x',
      winner: null
    }
  }

  resetGame() {
    this.setState({
      gameBoard: [
      '', '', '',
      '', '', '',
      '', '', ''
    ],
    winner: null,
    turn: 'x'});
  }

  updateBoard(turn, index) {
    if(this.state.gameBoard[index]==='x' || this.state.gameBoard[index]==='o') {
      alert("Wrong move!")
    } else {

      if(!this.state.winner) {
        let board = this.state.gameBoard;
        board[index] = turn;
        this.setState({gameBoard: board});
      }

    }

    //checking if someone won
    if(!this.state.winner) {
      let topRow = this.state.gameBoard[0]+this.state.gameBoard[1]+this.state.gameBoard[2];
      if(topRow === 'xxx' || topRow === 'ooo') { this.setState({winner: this.state.turn})}
      let midRow = this.state.gameBoard[3]+this.state.gameBoard[4]+this.state.gameBoard[5];
      if(midRow === 'xxx' || midRow === 'ooo') { this.setState({winner: this.state.turn})}
      let botRow = this.state.gameBoard[6]+this.state.gameBoard[7]+this.state.gameBoard[8];
      if(botRow === 'xxx' || botRow === 'ooo') { this.setState({winner: this.state.turn})}

      let topCol = this.state.gameBoard[0]+this.state.gameBoard[3]+this.state.gameBoard[6];
      if(topCol === 'xxx' || topCol === 'ooo') { this.setState({winner: this.state.turn})}
      let midCol = this.state.gameBoard[1]+this.state.gameBoard[4]+this.state.gameBoard[7];
      if(midCol === 'xxx' || midCol === 'ooo') { this.setState({winner: this.state.turn})}
      let botCol = this.state.gameBoard[2]+this.state.gameBoard[5]+this.state.gameBoard[8];
      if(botCol === 'xxx' || botCol === 'ooo') { this.setState({winner: this.state.turn})}

      let firstCross = this.state.gameBoard[0]+this.state.gameBoard[4]+this.state.gameBoard[8];
      if(firstCross === 'xxx' || firstCross === 'ooo') { this.setState({winner: this.state.turn})}
      let secondCross = this.state.gameBoard[2]+this.state.gameBoard[4]+this.state.gameBoard[6];
      if(secondCross === 'xxx' || secondCross === 'ooo') { this.setState({winner: this.state.turn})}


   }
   if(!this.state.winner) {
     if(this.state.turn === 'x') {
       this.setState({turn: 'o'})
     } else {
       this.setState({turn: 'x'})
     }
   }
  }

  render() {
    let winMessage;
    if(this.state.winner) {
      // Win message
      winMessage = <h2>Player {this.state.winner} won</h2>;
    } else if (!this.state.winner) {
      // draw message
      let checkRemis = 0;
      const TILES = this.state.gameBoard.length;
      for(let i = 0; i < TILES; i++) {
        if(this.state.gameBoard[i]) {checkRemis++};
        if(checkRemis==9) {winMessage = <h2>Draw!</h2>};
      }
    };


    return (
      <div className="App">
        <h2>Player {this.state.turn}</h2>
        {this.state.gameBoard.map((value,i) => {
              return (<Tile value={value}
                            index={i}
                            key={i}
                            turn={this.state.turn}
                            updateBoard={this.updateBoard.bind(this)}
                             />)
          }
        )}
        <Reset resetGame={this.resetGame.bind(this)}/>
        <h2>{winMessage}</h2>
      </div>
    );

  }
}
