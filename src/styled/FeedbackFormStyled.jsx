import styled from 'styled-components';

export const DivInputGroupStyled = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  padding: 0.7rem;
  border-radius: 1rem;
`;
export const InputStyled = styled.input`
  flex-grow: 2;
  border: none;
  font-size: 1.6rem;
  letter-spacing: 0.8px;
  &:focus {
    outline: none;
  }
`;
export const DivMessageStyled = styled.div`
  padding-top: 2rem;
  text-align: center;
  font-weight: 500;
  font-size: 1.6rem;
  color: #633ba3;
  letter-spacing: 0.8px;
`;
