import React, { Component } from 'react';
import './EndOfGame.css';

export default class EndOfGame extends Component {
  render() {
    const { gameState, winner, reset } = this.props;
    if (gameState === 'end') {
      return (
        <div>
          <h2>END OF GAME</h2>
          <p>{winner}</p>
          <div>
            <button className="reset" onClick={reset}>
              Play again
            </button>
          </div>
        </div>
      );
    } else return null;
  }
}
