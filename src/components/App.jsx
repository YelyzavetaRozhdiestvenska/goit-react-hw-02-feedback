import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleState = (chosenState) => {
    let obj = {}
    obj[chosenState] = this.state[chosenState] + 1
    this.setState(obj)
  }

  countTotalFeedback = () => {
    let sum = 0;
    Object.values(this.state).forEach(value => sum += value);
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const goodToAll = (this.state.good / (this.countTotalFeedback()))
    const percentage = (Math.round(goodToAll * 100));

    if (isNaN(percentage)) {
      return 0;
    }

    return percentage;

  };

  render() {
    return (
      <main>
        <h1>Please leave feedback</h1>
        <button onClick={() => this.handleState("good")}>Good</button>
        <button onClick={() => this.handleState("neutral")}>Neutral</button>
        <button onClick={() => this.handleState("bad")}>Bad</button>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
          </div>
      </main>
    );
  };
};






// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
