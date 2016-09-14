
import React, { Component } from 'react';

import UserGuess from './UserGuess';
import NumberLogic from './NumberLogic';
import Messages from './Messages';
import GameSettings from './GameSettings';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      min: 0,
      max: 100,
      randomNumber: 50,
      lastGuess: null
    };
  }

  updateRange(name, value) {
    this.setState({ [name]: parseInt(value) || 0});
  }

  generateRandomNumber() {
    const { min, max } = this.state;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    // below is the same as this.setState({ randomNumber: randomNumber })
    this.setState({ randomNumber });
  }

// <LastGuess guess={this.state.lastGuess} randomNumber={this.state.randomNumber}
// <Controls handleGuess={(guess) => this.setState({ lastGuess: guess})}
  render () {
    return (
      <section className="Application">
        <DataTable
          min={this.state.min}
          max={this.state.max} randomNumber={this.state.randomNumber} />
        <GameSettings
          min={this.state.min}
          max={this.state.max}
          handleChange={(name, value) => this.updateRange(name, value)}
          handleGenerate={() => this.generateRandomNumber()}
        />
        <UserGuess

        />
        <Messages
          guess={this.state.lastGuess} randomNumber={this.state.randomNumber}
        />
      </section>
    )
  }
}

const DataTable = ({ min, max, randomNumber}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Min</th>
          <th>Max</th>
          <th>randomNumber</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{min}</td>
          <td>{max}</td>
          <td>{randomNumber}</td>
        </tr>
      </tbody>
    </table>
  );
}
