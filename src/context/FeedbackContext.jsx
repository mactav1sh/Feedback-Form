import React, { useState, useEffect } from 'react';

const FeedbackContext = React.createContext({
  feedback: [],
  setFeedback: () => {},
});

export const FeedbackContextProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    editing: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  // CRUD Actions
  // Read Feedback
  useEffect(() => {
    const fetchdata = () => {
      fetch(`http://localhost:3004/feedback`)
        .then((response) => response.json())
        .then((data) => setFeedback(data))
        .catch((err) => console.log(err));
      setIsLoading(false);
    };

    fetchdata();
  }, []);

  // Create Feedback
  const createFeedback = (newFeedback) => {
    fetch(`http://localhost:3004/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
      .then((response) => response.json())
      .then((data) => setFeedback([data, ...feedback]))
      .catch((err) => console.log(err));
  };

  // Update Feedback
  const updateFeedback = async (id, newfeedback) => {
    const response = await fetch(`http://localhost:3004/feedback/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newfeedback),
    });
    const data = await response.json();

    const feedbackdata = feedback.map((item) =>
      item.id === id ? { ...item, ...data } : item
    );
    setFeedback(feedbackdata);
  };

  // Delete Feedback
  const deleteItem = (item) => {
    if (
      window.confirm(`Are you sure you want to delete feedback: "${item.text}"`)
    ) {
      fetch(`http://localhost:3004/feedback/${item.id}`, {
        method: 'DELETE',
      }).catch((err) => console.log(err));

      setFeedback((prev) => {
        return prev.filter((feedback) => feedback.id !== item.id);
      });
    }
  };

  const feedbackContextValue = {
    feedback,
    setFeedback,
    editFeedback,
    setEditFeedback,
    deleteItem,
    updateFeedback,
    createFeedback,
    isLoading,
  };

  return (
    <FeedbackContext.Provider value={feedbackContextValue}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
