import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './shared/Card';
import Button from './shared/Button';
import SelectRating from './SelectRating';
import FeedbackContext from '../context/FeedbackContext';
import {
  DivInputGroupStyled,
  InputStyled,
  DivMessageStyled,
} from '../styled/FeedbackFormStyled';

function FeedbackForm() {
  const { feedback, setFeedback, editFeedback, setEditFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const [message, setMessage] = useState(null);
  const [rating, setRating] = useState(10);

  useEffect(() => {
    const { item } = editFeedback;
    if (editFeedback.editing) {
      setText(item.text);
      setRating(item.rating);
      setDisabled(false);
    }
  }, [editFeedback]);

  const handleInputChange = (e) => {
    setText(e.target.value);
    // Used e.target here because when i used text.length behavior was weird
    if (e.target.value.trim().length >= 10) {
      setDisabled(false);
      setMessage(null);
    } else {
      setDisabled(true);
      setMessage('Text must be at least 10 characters');
    }
  };
  const updateFeedback = (newfeedback) => {
    const feedbackdata = feedback.map((item) =>
      item.id === newfeedback.id ? { ...item, ...newfeedback } : item
    );
    setFeedback(feedbackdata);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creating feedback object
    const newFeedback = {
      id: editFeedback.editing ? editFeedback.item.id : uuidv4(),
      rating,
      text,
    };
    // Checking to see whether to update or add new feedback
    if (editFeedback.editing) {
      updateFeedback(newFeedback);
    } else setFeedback([newFeedback, ...feedback]);

    // Default Form state
    setRating(10);
    setText('');
    setDisabled(true);
    setEditFeedback({ editing: false });
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Let's us know what do you like and what can we improve.</h2>
        <SelectRating setRating={(rating) => setRating(rating)} />
        <DivInputGroupStyled>
          <InputStyled
            onChange={handleInputChange}
            type="text"
            placeholder="Write Your Feedback Here"
            value={text}
          />
          <Button isPrimary={true} type="submit" isDisabled={isDisabled}>
            Submit
          </Button>
        </DivInputGroupStyled>
        {message && <DivMessageStyled>{message}</DivMessageStyled>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
