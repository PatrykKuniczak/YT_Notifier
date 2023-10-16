import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
    border: none;

    font-family: 'DM Sans', sans-serif;
  }
`;

export default GlobalStyles;
