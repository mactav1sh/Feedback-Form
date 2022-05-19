// import { useState } from "react";
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import {
  ButtonStyled,
  DivNumStyled,
  PStyled,
} from '../styled/FeedbackItem.styled';

function FeedbackItem({ item }) {
  const { setFeedback, setEditFeedback } = useContext(FeedbackContext);

  const deleteItem = (id) => {
    if (window.confirm(`Are you sure you want to delete ${item.text}`)) {
      setFeedback((prev) => {
        return prev.filter((feedback) => feedback.id !== id);
      });
    }
  };

  const editItem = () => {
    setEditFeedback({ item, editing: true });
  };

  return (
    <Card>
      <DivNumStyled>{item.rating}</DivNumStyled>

      <ButtonStyled
        onClick={() => {
          deleteItem(item.id);
        }}
      >
        <i className="fa-solid fa-xmark"></i>
      </ButtonStyled>

      <ButtonStyled
        isEdit={true}
        onClick={() => {
          editItem(item.id);
        }}
      >
        <i className="fa-solid fa-pen-to-square"></i>
      </ButtonStyled>

      <PStyled>{item.text}</PStyled>
    </Card>
  );
}
export default FeedbackItem;
