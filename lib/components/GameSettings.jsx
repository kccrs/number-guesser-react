const React = require('react');
const ReactDOM = require('react-dom');

// import NumberLogic from './NumberLogic';
// import UserGuess from './UserGuess';
// import Messages from './Messages';
export default class GameSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: ''
    };
  }
  render() {
    return (
      <div className="GameSettings">
        <input
          value={this.props.min}
          name="min"
          type="number"
          onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
        />
        <input
          value={this.props.max}
          name="max"
          type="number"
          onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
        />
        <button onClick={this.props.handleGenerate}>
          Enter Range
        </button>
        <p>
          What is your guess?
          <input
            type="number"
            value={this.state.currentGuess}
            onChange={(e) => this.setState({ currentGuess: parseInt(e.target.value)})}
          />
        </p>
        <button
          onClick={() => this.props.handleGuess(this.state.currentGuess)}
          disabled={!this.state.currentGuess}
        >
          Guess
        </button>
        <button
          onClick={() => this.setState({ currentGuess: ''})}
          disabled={!this.state.currentGuess}
        >
          Clear
        </button>
        <button>
          Restart Game
        </button>
      </div>
      )
    }
  }
