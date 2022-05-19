import styled from 'styled-components';

const SpinnerStyled = styled.div`
  border: 12px solid #fff;
  border-radius: 50%;
  border-top: 12px solid #e3e3e3;
  width: 10rem;
  height: 10rem;
  -webkit-animation: spin 2s linear infinite;
  /* Safari */
  animation: spin 2s linear infinite;
  margin: 0 auto;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return <SpinnerStyled />;
};

export default Spinner;
