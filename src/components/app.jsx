import React, { useState } from 'react';
import Header from './Header';
import FeedbackList from './FeedbackList';
import feedbackData from '../data/feedbackData';
import FeedbackStats from './FeedbackStats';
import FeedbackForm from './FeedbackForm';
import FeedbackContext from '../context/FeedbackContext';
import ContainerStyled from '../styled/containerStyled';
import GlobalStyle from '../styled/GlobalStyle';

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    editing: false,
  });

  const feedbackContextValue = {
    feedback,
    setFeedback,
    editFeedback,
    setEditFeedback,
  };

  return (
    <>
      <GlobalStyle />
      <Header text="Feedback form" />
      <ContainerStyled>
        <FeedbackContext.Provider value={feedbackContextValue}>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </FeedbackContext.Provider>
      </ContainerStyled>
    </>
  );
};
export default App;
