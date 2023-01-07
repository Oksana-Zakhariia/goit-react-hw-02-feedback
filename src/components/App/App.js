import { AppContainer } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import React from 'react';
import PropTypes from 'prop-types';
export class App extends React.Component {
  static defaultProps = {
    text: '',
  };
  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGoodFeedback = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  handleNeutralFeedback = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleBadFeedback = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  countTotalFeedback = () => {
    const total = this.state.good + this.state.bad + this.state.neutral;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = parseInt(
      (this.state.good * 100) /
        (this.state.good + this.state.bad + this.state.neutral)
    );
    return positiveFeedback;
  };

  render() {
    return (
      <AppContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            bad={this.handleBadFeedback}
            neutral={this.handleNeutralFeedback}
            good={this.handleGoodFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePersentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </AppContainer>
    );
  }
  // <div>
  //   <h2>Please leave feedback</h2>
  //   <ButtonList>
  //     <li>
  //       <button type="button" onClick={this.handleGoodFeedback}>
  //         Good
  //       </button>
  //     </li>
  //     <li>
  //       <button type="button" onClick={this.handleNeutralFeedback}>
  //         Neutral
  //       </button>
  //     </li>
  //     <li>
  //       <button type="button" onClick={this.handleBadFeedback}>
  //         Bad
  //       </button>
  //     </li>
  //   </ButtonList>
  //   <div>
  //     <h2>Statistic</h2>
  //     <ul>
  //       <li>
  //         <p>Good {this.state.good}</p>
  //       </li>
  //       <li>
  //         <p>Neutral {this.state.neutral}</p>
  //       </li>
  //       <li>
  //         <p>Bad {this.state.bad}</p>
  //       </li>
  //     </ul>
  //     <h2>Total {this.countTotalFeedback()}</h2>
  //     <h2>Positive feedback {this.countPositiveFeedbackPercentage()} %</h2>
  //   </div>
  //     </div>
  //   );
  // }
}
