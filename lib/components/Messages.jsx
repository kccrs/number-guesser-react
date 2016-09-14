const React = require('react');
// import UserGuess from './UserGuess';
// import NumberLogic from './NumberLogic';
import GameSettings from './GameSettings';
import Application from './Application';

export default class Messages extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      message: '',
    };
  }

  handleSubmit(lastGuess) {
    // const { lastGuess, randomNumber} = this.props;
    if (this.props.lastGuess < this.props.randomNumber) {

      this.setState({ message: 'Your this.props.lastGuess is too low.  Try again.'});
      return this.state.message;
    }
    if (this.props.lastGuess > this.props.randomNumber) {

      this.setState({ message: 'Your this.props.lastGuess is too high.  Try again.'});
      return this.state.message;
    }
    if (this.props.lastGuess === this.props.randomNumber) {

      this.setState({ message: "You're a genius! Play again?"});
      return this.state.message;
    }
  }

  render() {

    return (
      <div className="Messages">
        <p>Your last guess was...</p>
        <p>{this.props.lastGuess}</p>
        <p>{this.handleSubmit()}</p>
      </div>
    );
  }
}
