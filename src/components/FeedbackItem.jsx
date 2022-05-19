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
  const { setEditFeedback, deleteItem } = useContext(FeedbackContext);

  const editItem = () => {
    setEditFeedback({ item, editing: true });
  };

  return (
    <Card>
      <DivNumStyled>{item.rating}</DivNumStyled>

      <ButtonStyled
        onClick={() => {
          deleteItem(item);
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
