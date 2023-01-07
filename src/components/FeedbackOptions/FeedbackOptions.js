import { ButtonList } from './FeedbackOptionsstyled';
export const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <div>
      <ButtonList>
        <li>
          <button type="button" onClick={good}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={neutral}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={bad}>
            Bad
          </button>
        </li>
      </ButtonList>
    </div>
  );
};

// import { ButtonList } from './Feedback.styled';
// import React from 'react';
// import PropTypes from 'prop-types';
// export class Feedback extends React.Component {
//   static defaultProps = {
//     text: '',
//   };
//   static propTypes = {
//     text: PropTypes.string.isRequired,
//   };
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleGoodFeedback = () => {
//     this.setState(prevState => {
//       return { good: prevState.good + 1 };
//     });
//   };
//   handleNeutralFeedback = () => {
//     this.setState(prevState => {
//       return { neutral: prevState.neutral + 1 };
//     });
//   };
//   handleBadFeedback = () => {
//     this.setState(prevState => {
//       return { bad: prevState.bad + 1 };
//     });
//   };
//   countTotalFeedback = () => {
//     const total = this.state.good + this.state.bad + this.state.neutral;
//     return total;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const positiveFeedback = parseInt(
//       (this.state.good * 100) /
//         (this.state.good + this.state.bad + this.state.neutral)
//     );
//     return positiveFeedback;
//   };

//   render() {
//     return (
//       <div>
//         <h2>Please leave feedback</h2>
//         <ButtonList>
//           <li>
//             <button type="button" onClick={this.handleGoodFeedback}>
//               Good
//             </button>
//           </li>
//           <li>
//             <button type="button" onClick={this.handleNeutralFeedback}>
//               Neutral
//             </button>
//           </li>
//           <li>
//             <button type="button" onClick={this.handleBadFeedback}>
//               Bad
//             </button>
//           </li>
//         </ButtonList>
//         {/* <div>
//           <h2>Statistic</h2>
//           <ul>
//             <li>
//               <p>Good {this.state.good}</p>
//             </li>
//             <li>
//               <p>Neutral {this.state.neutral}</p>
//             </li>
//             <li>
//               <p>Bad {this.state.bad}</p>
//             </li>
//           </ul>
//           <h2>Total {this.countTotalFeedback()}</h2>
//           <h2>Positive feedback {this.countPositiveFeedbackPercentage()} %</h2>
//         </div> */}
//       </div>
//     );
//   }
// }
