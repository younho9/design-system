import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      red: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      purple100: string;
      purple200: string;
      purple300: string;
      purple400: string;
      purple500: string;
      purple600: string;
      purple700: string;
      purple800: string;
      purple900: string;
    };
    typography: {
      type: {
        primary: string;
      };
      weight: {
        thin: number;
        light: number;
        regular: number;
        medium: number;
        bold: number;
        black: number;
      };
    };
    border: {
      width: string;
      radius: {
        small: string;
        big: string;
      };
    };
    shadow: {
      weak: string;
      strong: string;
    };
  }
}
