// import React, { Component } from 'react';
// // import NumberLogic from ('./NumberLogic');
// // import Messages from ('./Messages');
// // import GameSettings from ('./GameSettings');
//
// export default class UserGuess extends Component {
//   constructor() {
//     super();
//     this.state = {
//       userGuess: ''
//     };
//   }
//
//   render() {
//     return (
//       <div className="Guess">
//         Enter your guess.
//         <input
//           value={this.state.userGuess}
//           name="guess"
//           type="number"
//           onChange={(e) => this.setState({ userGuess: e.target.value})}
//         />
//         <button>
//           Submit
//         </button>
//       </div>
//     )
//   }
// }
//
// // onClick={() => this.props.handleSubmit(this.state.userGuess)}
//
// // export default class UserGuess extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       minimum: 0,
// //       maximum: 100,
// //       randomNumber: null,
// //     };
// //     // this.setMaximum.bind(this);
// //     // this.setMinimum.bind(this);
// //     // this.setRandom.bind(this);
// //   }
//
//     // setMinimum(event) {
//     //   // let min = document.querySelector('.MinNumber').value;
//     //   // this.setState({minimum: this.state.minimum + min});
//     //   debugger;
//     //   const newMin = event.target.value;
//     //   this.setState({minimum: newMin});
//     //   console.log(this.state.minimum);
//     // }
//     //
//     // setMaximum(event) {
//     //   // let max = document.querySelector('.MaxNumber').value;
//     //   // this.setState({maximum: this.state.maximum - 100 + max});
//     //
//     //   const newMax = event.target.value;
//     //   this.setState({maximum: newMax});
//     //   console.log(this.state.maximum);
//     // }
//     //
//     // setRandom(min, max) {
//     //   this.setState({randomNumber:  Math.floor(Math.random() * (max - min+ 1)) + min});
//     //   console.log(this.state.randomNumber);
//     // }
//
//   // handleClick (min, max) {
//   //
//   //   this.setMinimum(min);
//   //   this.setMaximum(max);
//   //   this.setRandom(min, max);
//   // }
//
// //   render() {
// //     return (
// //       <article className="UserInputs">
// //         <h3>Enter a minimum number</h3>
// //         <label>
// //           Minimum
// //           <input type="number" name="minimum" className="MinNumber" value={this.state.minimum} onChange={this.setMinimum.bind(this)} />
// //         </label>
// //         <h3>Enter a maximum number</h3>
// //         <label>
// //           Maximum
// //           <input type="number" name="maximum" className="MaxNumber" value={this.state.maximum} onChange={(e) => this.setState({ maximum: e.target.value})} />
// //         </label>
// //         <button className="EnterRange" onClick={this.handleClick(this.state.minimum, this.state.maximum)}>
// //           Enter Range
// //         </button>
// //       </article>
// //     );
// //   }
// // }
//
// // <button className="MinimumButton" onClick={this.setMinimumNumber.bind(this)}>Enter Min</button>
//
// // <button className="MaximumButton" onClick={this.setMaximumNumber.bind(this)}>Enter Max</button>
//
// // value={this.state.minimum}
// // onChange={(e) => this.setState({ minimum: e.target.value })}
