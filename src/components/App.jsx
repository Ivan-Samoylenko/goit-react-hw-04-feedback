import { useState } from 'react';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return `${Math.round((good / countTotalFeedback()) * 100)}%`;
  }

  function onLeaveFeedback(name) {
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        return;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        return;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        return;
      default:
        console.log(`There is no such option: ${name}`);
        return;
    }
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    </>
  );
};
