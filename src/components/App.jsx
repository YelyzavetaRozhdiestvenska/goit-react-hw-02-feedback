import React, { Component } from 'react';
import {Statistic} from './statistic/Statistic';
import {Section} from './sections/Section';
import FeedbackOptions from './buttons/FeedbackOptions'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  feedbackOptions = Object.keys(this.state) 

  handleState = (chosenState) => {
    let obj = {}
    obj[chosenState] = this.state[chosenState] + 1
    this.setState(obj)
  };

  render() {
    return (
      <main>
        <Section title="Please leave feedback">
        <FeedbackOptions options={this.feedbackOptions} onLeaveFeedback={this.handleState}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
        <Statistic feedback={this.state}/>
        </Section>
       </main>
    );
  };
};




