import styled from 'styled-components';

const UlStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 3rem 0 2rem 0;
  list-style: none;

  li {
    position: relative;
    background: #f4f4f4;
    width: 4rem;
    height: 4rem;
    padding: 2rem;
    text-align: center;
    border-radius: 50%;
    font-size: 1.8rem;
    border: 1px #eee solid;
    transition: all 0.3s;
  }

  li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5rem;
    height: 5rem;
    padding: 1rem;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    font-weight: 500;
  }

  li:hover {
    background: #f472b6;
    color: #fff;
  }
  [type='radio'] {
    opacity: 0;
  }

  [type='radio']:checked ~ label {
    background: #f472b6;
    color: #fff;
    font-weight: 700;
  }
`;
export default UlStyled;
