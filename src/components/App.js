import React, { Component } from 'react';
import Start from './Start';
import Game from './Game';
import EndOfGame from './EndOfGame';

import './App.css';

class App extends Component {
  state = {
    gameState: 'start',
    winner: '',
  };

  onStartClick() {
    this.setState({
      gameState: 'game',
    });
  }
  onGameWon(winner) {
    this.setState({ gameState: 'end', winner: `Player ${winner} win !` });
  }

  onEquality() {
    this.setState({ gameState: 'end', winner: 'No winner !' });
  }

  onReset() {
    this.setState({
      gameState: 'game',
      winner: '',
    });
  }

  render() {
    const { gameState, winner } = this.state;
    return (
      <div className="App">
        <h1>Jeu du morpions</h1>
        <Start gameState={gameState} onClick={this.onStartClick.bind(this)} />
        <Game
          gameState={gameState}
          onGameWon={this.onGameWon.bind(this)}
          onEquality={this.onEquality.bind(this)}
        />
        <EndOfGame
          gameState={gameState}
          winner={winner}
          reset={this.onReset.bind(this)}
        />
      </div>
    );
  }
}

export default App;
