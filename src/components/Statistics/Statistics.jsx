import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <List>
    <li>
      <p>Good: {good}</p>
    </li>
    <li>
      <p>Neutral: {neutral}</p>
    </li>
    <li>
      <p>Bad: {bad}</p>
    </li>
    <li>
      <p>Total: {total}</p>
    </li>
    <li>
      <p>Positive feedback: {positivePercentage}%</p>
    </li>
  </List>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
