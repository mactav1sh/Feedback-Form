import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #4776E6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #8E54E9, #4776E6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #8E54E9, #4776E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

font-family: 'Open Sans', sans-serif; 
  line-height: 1.6;
}
html{
  font-size: 62.5%;
}
`;

export default GlobalStyle;
