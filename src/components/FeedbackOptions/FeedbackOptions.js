export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        type="button"
        key={[option]}
        onClick={() => {
          onLeaveFeedback([option]);
        }}
      >
        {option[0].toUpperCase() + option.slice(1, option.length)}
      </button>
    );
  });
};
