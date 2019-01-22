import React, { Component } from 'react';
import './Game.css';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 1,
      game: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      solutions: [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
      ],
    };
  }

  attributeCaseToPlayer(caseId) {
    const { currentPlayer, game } = this.state;
    const currentGame = game;
    currentGame[caseId] = currentPlayer;
    this.setState({
      game: currentGame,
    });
  }

  isPlayerWon(caseId, player) {
    const { game, solutions } = this.state;

    const solutionsToWin = solutions.filter(solution =>
      solution.includes(caseId)
    );

    const isPlayerHasASolution = solutionsToWin.map(solution => {
      return solution.every(value => game[value] === player);
    });
    return isPlayerHasASolution.find(caseGame => caseGame === true);
  }

  onCaseClick(caseId) {
    const { currentPlayer, game } = this.state;

    if (game[caseId] === 0) {
      this.attributeCaseToPlayer(caseId);

      if (this.isPlayerWon(caseId, currentPlayer)) {
        this.props.onGameWon(currentPlayer);
        this.setState({
          game: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        });
      } else if (game.includes(0)) {
        const newPlayer = currentPlayer === 1 ? 2 : 1;
        this.setState({
          currentPlayer: newPlayer,
        });
      } else {
        this.props.onEquality();
        this.setState({
          game: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        });
      }
    }
  }

  render() {
    const { currentPlayer, game } = this.state;
    if (this.props.gameState === 'game') {
      return (
        <div className="game">
          <h2>GAME ON</h2>
          <p>Player {currentPlayer}</p>
          <div className="game-container">
            <div className="game-case" onClick={this.onCaseClick.bind(this, 0)}>
              {game[0]}
            </div>
            <div className="game-case" onClick={this.onCaseClick.bind(this, 1)}>
              {game[1]}
            </div>
            <div className="game-case" onClick={this.onCaseClick.bind(this, 2)}>
              {game[2]}
            </div>
            <div className="game-case" onClick={this.onCaseClick.bind(this, 3)}>
              {game[3]}
            </div>
            <div className="game-case" onClick={this.onCaseClick.bind(this, 4)}>
              {game[4]}
            </div>
            <div className="game-case" onClick={this.onCaseClick.bind(this, 5)}>
              {game[5]}
            </div>
            <div className="game-case" onClick={this.onCaseClick.bind(this, 6)}>
              {game[6]}
            </div>
            <div className="game-case" onClick={this.onCaseClick.bind(this, 7)}>
              {game[7]}
            </div>
            <div className="game-case" onClick={this.onCaseClick.bind(this, 8)}>
              {game[8]}
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}
