import PropTypes from 'prop-types';

export const Statistics = ({
  text,
  good,
  neutral,
  bad,
  total,
  positivePersentage,
}) => {
  return (
    <div>
      <h2>{text}</h2>
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
