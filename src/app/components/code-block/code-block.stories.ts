import { argsToTemplate, Meta, StoryObj } from '@storybook/angular';
import { CodeBlock } from './code-block';

const meta: Meta<CodeBlock> = {
  title: 'Library/Code Block',
  component: CodeBlock,
  tags: ['dombrazeel-library'],
};

export default meta;
type Story = StoryObj<CodeBlock>;

export const Default: Story = {
  render: ({ ...args }) => ({
    props: {
      ...args,
    },
    template: `
      <db-code-block>
        {{ '{' }}
          var helloWorld = "Hello World";
          console.log(helloWorld);
        {{ '}' }}
      </db-code-block>
    `,
  }),
};

export const WithTitle: Story = {
  render: ({ ...args }) => ({
    props: {
      ...args,
    },
    template: `
      <db-code-block title="code.js">
        {{ '{' }}
          var helloWorld = "Hello World";
          console.log(helloWorld);
        {{ '}' }}
      </db-code-block>
    `,
  }),
};
