import styled from 'styled-components';
//Style component

const CardStyled = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 1rem;
  padding: 4rem 5rem;
  margin: 2rem 0;
  position: relative;
  letter-spacing: 0.8px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05);

  ${(props) =>
    props.reverse ? 'background-color: rgba(0, 0, 0, 0.4);color: #fff;' : null}

  h2 {
    font-size: 2.4rem;
    font-weight: 600;
    text-align: center;
  }
`;
export default CardStyled;
