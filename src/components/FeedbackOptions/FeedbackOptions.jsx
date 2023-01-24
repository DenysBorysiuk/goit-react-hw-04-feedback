import PropTypes from 'prop-types';
import { Btn, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <List>
    {options.map(option => (
      <li key={option}>
        <Btn type="button" option={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Btn>
      </li>
    ))}
  </List>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
