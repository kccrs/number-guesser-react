const React = require('react');
import UserGuess from './UserGuess';
// import NumberLogic from './NumberLogic';
// import GameSettings from './GameSettings';
// import Application from './Application';

export default class Messages extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      message: ''
    };
  }

  handleSubmit() {
    // let guess = {this.props.userGuess};
    if (this.props.lastGuess < this.props.randomNumber) {
      // return <Messages /> too low
      this.setState({ message: 'Your guess is too low.  Try again.'});
      return this.state.message;
    }
    if (this.props.lastGuess > this.props.randomNumber) {
      // return <Messages /> too high
      this.setState({ message: 'Your guess is too high.  Try again.'});
      return this.state.message;
    }
    if (this.props.lastGuess === this.props.randomNumber) {
      // return <Messages /> you did it!
      this.setState({ message: "You're a genius! Play again?"});
    }
  }

  render() {
    if (!this.props.lastGuess) {
      return (
        <div className="Messages">
          Make a guess below.
        </div>
      );
    }
    return (
      <div className="Messages">
        <p>Your last guess was...</p>
        <p>{this.props.lastGuess}</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
