import { DefaultTheme } from 'styled-components';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  red: '#9c2d2d',
  gray100: '#eeeeee',
  gray200: '#dddddd',
  gray300: '#cccccc',
  gray400: '#bbbbbb',
  gray500: '#aaaaaa',
  gray600: '#888888',
  gray700: '#666666',
  gray800: '#444444',
  gray900: '#222222',
  purple100: '#e6e6fb',
  purple200: '#d4d4ff',
  purple300: '#ccc6ff',
  purple400: '#afa6f9',
  purple500: '#9587f1',
  purple600: '#7a6aff',
  purple700: '#664fff',
  purple800: '#3e2abe',
  purple900: '#221477',
};

export const typography = {
  type: {
    primary:
      "'Noto Sans KR', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  weight: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
};

export const border = {
  width: '1px',
  radius: {
    small: '0.375rem',
    big: '1rem',
  },
};

export const shadow = {
  weak: '0px 0px 8px rgba(0, 0, 0, 0.2)',
  strong: '0 30px 60px 0 rgba(90, 116, 148, 0.4)',
};

export const theme: DefaultTheme = {
  colors,
  typography,
  border,
  shadow,
};
