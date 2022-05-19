import styled from 'styled-components';
export const ButtonStyled = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  cursor: pointer;
  background: none;
  color: #633ba3;
  border: none;
  ${(props) => (props.isEdit ? 'right: 40px;' : null)}
`;

export const DivNumStyled = styled.div`
  position: relative;
  background: #f4f4f4;
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  text-align: center;
  border-radius: 50%;
  font-size: 1.8rem;
  border: 1px #eee solid;
  transition: 0.3s;
  background: #f472b6;
  color: #fff;
  position: absolute;
  top: -1rem;
  left: -1rem;
  font-weight: 700;
`;
export const PStyled = styled.div`
  font-size: 1.8rem;
  letter-spacing: 0.8px;
  font-weight: 500;
`;
