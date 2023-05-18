import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    width: 0;

    box-sizing: border-box;

    margin: 0;
    padding: 0;
    border: none;
  }
`;

export default GlobalStyles;
