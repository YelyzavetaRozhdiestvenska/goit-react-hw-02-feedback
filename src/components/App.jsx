import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0
  }

handleClickGood = () =>{
  this.setState(prevState=>{
    return{
      good: prevState.good+1,
      // total: prevState.total+1,
    };
  });
};

handleClickNeutral = () =>{
  this.setState(prevState=>{
    return{
      neutral: prevState.neutral+1,
      // total: prevState.total+1,
    };
  });
};

handleClickBad = () =>{
  this.setState(prevState=>{
    return{
      bad: prevState.bad+1,
      // total: prevState.total+1,
    };
  });
};

countTotalFeedback = () => {
  const {good, neutral, bad} = this.state;
  return (Math.round(good + neutral + bad));
};

countPositiveFeedbackPercentage = () => {
  const {good, neutral, bad} = this.state;
return  (Math.round((good / (good + neutral + bad)) * 100));
};


  render() {
    return (
<main>
  <h1>Please leave feedback</h1>
  <button onClick={this.handleClickGood}>Good</button>
  <button onClick={this.handleClickNeutral}>Neutral</button>
  <button onClick={this.handleClickBad}>Bad</button>
  <div>
    <h2>Statistics</h2>
    <p>Good: {this.state.good}</p>
    <p>Neutral: {this.state.neutral}</p>
    <p>Bad: {this.state.bad}</p>
    <p>Total: {this.countTotalFeedback}</p>
    <p>Positive feedback: {this.countPositiveFeedbackPercentage} %</p>
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
