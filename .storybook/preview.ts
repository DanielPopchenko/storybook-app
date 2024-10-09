import type { Preview } from '@storybook/react';
// import '../index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      description: {
        component: 'This is a global description for all components.',
        story: 'This is a global description for all stories.',
      },
    },
    options: {
      brandTitle: 'Volta App',
    },
  },
};

export default preview;
