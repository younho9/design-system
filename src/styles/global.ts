import { createGlobalStyle } from 'styled-components';

import resetStyle from './resetStyle';
import { theme } from './theme';

export const fontUrl =
  'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap';

export const GlobalStyle = createGlobalStyle`
  ${resetStyle}
  body {
    margin: 0;
    font-family: ${theme.typography.type.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
