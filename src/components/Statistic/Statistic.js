import PropTypes from 'prop-types';

export const Statistic = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <ul>
        <li>
          <p>Good</p>
        </li>
        <li>
          <p>Neutral</p>
        </li>
        <li>
          <p>Bad</p>
        </li>
      </ul>
    </div>
  );
};
Statistic.propTypes = {
  text: PropTypes.string.isRequired,
};
