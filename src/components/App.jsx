import React, { Component } from 'react';
import {Statistic} from './statistic/Statistic';
import {Section} from './sections/Section';
import {Notification} from './notification/Notification';
// import {FeedbackOptions} from './buttons/FeedbackOptions'

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
  };

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
        <Section title="Please leave feedback">
        {/* <h1>Please leave feedback</h1> */}
        {/* <FeedbackOptions onClick={() => this.handleState()}/> */}
        <button onClick={() => this.handleState("good")}>Good</button>
        <button onClick={() => this.handleState("neutral")}>Neutral</button>
        <button onClick={() => this.handleState("bad")}>Bad</button>
        </Section>
        <Section title="Statistics">
         {/* <h2>Statistics</h2> */}
         {this.countTotalFeedback() === 0 ? (<Notification message="There is no feedback"/>) : 
        (<Statistic 
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
        />)}
        </Section>
       </main>
    );
  };
};


