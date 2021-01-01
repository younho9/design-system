import { GlobalStyle } from '../src/styles/global';
import { loadFontsForStorybook } from '../src/utils';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
];

loadFontsForStorybook();
