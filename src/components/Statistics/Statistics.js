import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePersentage,
}) => {
  return (
    <div>
      <ul>
        <li>
          <p>Good {good}</p>
        </li>
        <li>
          <p>Neutral {neutral}</p>
        </li>
        <li>
          <p>Bad {bad}</p>
        </li>
      </ul>
      <h2>Total {total}</h2>
      <h2>Positive feedback {positivePersentage} %</h2>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePersentage: PropTypes.number.isRequired,
};
