import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Landing', '*'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
