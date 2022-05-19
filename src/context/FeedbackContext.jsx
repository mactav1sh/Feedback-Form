import React from 'react';

const FeedbackContext = React.createContext({
  feedback: [],
  setFeedback: () => {},
});

export default FeedbackContext;
