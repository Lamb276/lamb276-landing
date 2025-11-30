import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Golos Text', sans-serif;
    font-weight: 100;
    margin: 0;
  }

  input, textarea, select, button {
    font-family: 'Golos Text', sans-serif;
    font-weight: 100;
    font-size: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
