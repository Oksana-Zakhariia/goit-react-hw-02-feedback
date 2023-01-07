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
