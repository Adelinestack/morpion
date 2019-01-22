import React, { Component } from 'react';

export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.gameState === 'start') {
      return (
        <div>
          <button onClick={this.props.onClick}>Start</button>
        </div>
      );
    } else return null;
  }
}
