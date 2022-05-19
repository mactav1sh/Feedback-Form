import styled from 'styled-components';

const ButtonStyled = styled.button`
  color: #fff;
  border: 0;
  border-radius: 0.8rem;
  color: #fff;
  width: 10rem;
  height: 4rem;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.4rem;
  letter-spacing: 0.8px;
  font-weight: 600;

  ${(props) => {
    return props.isPrimary
      ? 'background-color: #f472b6;'
      : 'background-color: #202142;';
  }}

  &:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  &:disabled {
    background-color: #ccc;
    color: #333;
    font-weight: 400;

    cursor: auto;
  }

  &:disabled:hover {
    transform: scale(1);
    opacity: 1;
  }
`;
export default ButtonStyled;
