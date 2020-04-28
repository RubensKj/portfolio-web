import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 16px 'Poppins', sans-serif;
    background-color: #12141d;
    color: #FFF;
    -webkit-font-smoothing: antialiased !important;
  }
`;
