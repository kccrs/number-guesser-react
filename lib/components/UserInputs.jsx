const React = require('react');
const ReactDOM = require('react-dom');

class UserInputs extends React.Component {

  render() {
    return (
      <article className="UserInputs">
        <label>
          Enter a minimum number.
          <input type="number" className="minimum" name="minimum" value={this.props.minimum} />
        </label>
        <label>
          Enter a maximum number.
          <input type="number" className="maximum" name="maximum" value={this.props.minimum}/>
        </label>
      </article>
    );
  }
}

export default UserInputs;
