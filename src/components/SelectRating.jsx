import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import UlStyled from '../styled/SelectRating.styled';

function SelectRating({ setRating }) {
  const [selected, SetSelected] = useState(10);

  const { editFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    const { item } = editFeedback;
    if (editFeedback.editing) {
      if (editFeedback.editing) SetSelected(item.rating);
    }
  }, [editFeedback]);

  const handleChange = (e) => {
    SetSelected(+e.target.value);
    setRating(+e.target.value);
  };
  const ratings = Array(10)
    .fill('')
    .map((_, i) => {
      return (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      );
    });

  return <UlStyled>{ratings}</UlStyled>;
}

export default SelectRating;
