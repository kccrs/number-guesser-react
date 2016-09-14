import React, { Component } from 'react';
import UserGuess from './UserGuess';
// import Messages from './Messages';
// import GameSettings from './GameSettings';

export default class NumberLogic extends Component {
  constructor () {
    super ();
    this.state = {
      userGuess: ''
    };
  }

  setUserGuess() {
    let currentGuess = document.querySelector('.UserGuess');

    this.setState({userGuess: currentGuess});
    console.log(this.state.userGuess);
  }

  // checkGuess() {
  //
  // }

  render() {
    return (
      <article className="NumberLogic">
        <label>
          Guess a number within your range.
          <input type="number" name="userGuess" className="UserGuess" value={this.state.userGuess} />
        </label>
        <button className="UserGuessButton" onClick={this.setUserGuess}>Enter Guess</button>
      </article>
    );
  }
}
