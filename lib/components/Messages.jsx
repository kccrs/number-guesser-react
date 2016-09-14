const React = require('react');
// import UserGuess from './UserGuess';
// import NumberLogic from './NumberLogic';
import GameSettings from './GameSettings';
import Application from './Application';

export default class Messages extends React.Component {
  constructor (lastGuess, randomNumber) {
    super ();
    this.state = {
      message: '',
    };
  }

// if the argument is passed in, you don't need to add "this"
    componentWillReceiveProps(nextProps) {

      if (nextProps.lastGuess < this.props.randomNumber) {
        this.setState({ message: 'Your last guess is too low.  Try again.'});
      }
      if (nextProps.lastGuess > this.props.randomNumber) {

        this.setState({ message: 'Your last guess is too high.  Try again.'});
      }
      if (nextProps.lastGuess === this.props.randomNumber) {

        this.setState({ message: "You're a genius! Play again?"});
    }
  }

  render() {

    return (
      <div className="Messages">
        <p>Your last guess was...</p>
        <p>{this.props.lastGuess}</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
