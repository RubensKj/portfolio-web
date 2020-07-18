import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #141729;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #49e287;
      border-radius: 8px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #40bb72;
    }
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 16px 'Poppins', sans-serif;
    background-color: #fafbff;
    color: #3C4858;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    font: 16px 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
`;
