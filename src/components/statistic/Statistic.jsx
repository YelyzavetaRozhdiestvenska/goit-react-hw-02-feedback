import React from 'react';
import { Notification } from 'components/notification/Notification';
import {P} from './Statistic.style';

export function Statistic ({ feedback }) {

  const countTotalFeedback = (feedback) => {
    let sum = 0;
    Object.values(feedback).forEach(value => sum += value);
    return sum;
  };

  const countPositiveFeedbackPercentage = (feedback) => {
    const goodToAll = (feedback.good / (countTotalFeedback(feedback)))
    const percentage = (Math.round(goodToAll * 100));

    if (isNaN(percentage)) {
      return 0;
    }

    return percentage;

  };

  let total = countTotalFeedback(feedback);
  let percentage = countPositiveFeedbackPercentage(feedback);

  return (<>{total === 0 ? <Notification message="There is no feedback"/> : <FeedbackBlock feedback={feedback} total={total} percentage={percentage}/>}</>)

  }

  
function FeedbackBlock ({ feedback, total, percentage }) {
      return <>
        <P>Good: {feedback.good}</P>
        <P>Neutral: {feedback.neutral}</P>
        <P>Bad: {feedback.bad}</P>
        <P>Total: {total} </P>
        <P>Positive feedback: {percentage}  %</P>
      </>
  }