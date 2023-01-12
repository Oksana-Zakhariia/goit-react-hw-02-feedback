import { Button } from './FeedbackOptionsstyled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <Button
        type="button"
        key={[option]}
        onClick={() => {
          onLeaveFeedback([option]);
        }}
      >
        {option[0].toUpperCase() + option.slice(1, option.length)}
      </Button>
    );
  });
};
