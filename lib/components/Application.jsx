
import React, { Component } from 'react';

// import UserGuess from './UserGuess';
import NumberLogic from './NumberLogic';
import Messages from './Messages';
import GameSettings from './GameSettings';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      min: '',
      max: '',
      randomNumber: '',
      lastGuess: null
    };
  }

  setValue(name, value) {
    this.setState({ [name]: parseInt(value) || 0});
  }

  generateRandomNumber() {
    const { min, max } = this.state;
    const randomNumber = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
    // below is the same as this.setState({ randomNumber: randomNumber })
    this.setState({ randomNumber });
    this.setState({ min: ''});
    this.setState({ max: ''});
  }

  restartGame() {
    this.setState({ randomNumber: ''});
    this.setState({ min: ''});
    this.setState({ max: ''});
    this.setState({ lastGuess: null});

  }

  render () {
    return (
      <section className="Application">
        <GameSettings
          min={this.state.min}
          max={this.state.max}
          handleChange={(name, value) => this.setValue(name, value)}
          handleGenerate={() => this.generateRandomNumber()}
          handleGuess={(guess) => this.setState({ lastGuess: guess})}
          handleRestart={() => this.restartGame}
        />
        <Messages
          lastGuess={this.state.lastGuess} randomNumber={this.state.randomNumber}
        />
      </section>
    )
  }
}
