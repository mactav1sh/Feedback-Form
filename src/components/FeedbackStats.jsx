import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';
import DivStyled from '../styled/FeedbackStatsSyled';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  const calculatedAvg = feedback.reduce((prev, feedback, _, array) => {
    return feedback.rating / array.length + prev;
  }, 0);

  const average = calculatedAvg ? calculatedAvg.toFixed(1) : null;

  return (
    <DivStyled>
      {feedback.length ? (
        <p>
          <span>{feedback.length}</span>
          {'Reviews'}
        </p>
      ) : (
        <p>No Reviews Yet</p>
      )}
      {average ? (
        <p>
          <span>{calculatedAvg.toFixed(1)}</span>
          {'Average Rating'}
        </p>
      ) : (
        <p>No Ratings yet.</p>
      )}
    </DivStyled>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackStats;
