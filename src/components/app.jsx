// import React, { useState } from 'react';
import Header from './Header';
import FeedbackList from './FeedbackList';
import FeedbackStats from './FeedbackStats';
import FeedbackForm from './FeedbackForm';
import { FeedbackContextProvider } from '../context/FeedbackContext';
import ContainerStyled from '../styled/containerStyled';
import GlobalStyle from '../styled/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header text="Feedback form" />
      <ContainerStyled>
        <FeedbackContextProvider>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </FeedbackContextProvider>
      </ContainerStyled>
    </>
  );
};
export default App;
