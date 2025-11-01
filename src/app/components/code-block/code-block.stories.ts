import { argsToTemplate, Meta, StoryObj } from '@storybook/angular';
import { CodeBlock } from './code-block';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CodeBlock> = {
  title: 'Library/Code Block',
  component: CodeBlock,
  tags: ['dombrazeel-library'],
};

export default meta;
type Story = StoryObj<CodeBlock>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
      <db-code-block ${argsToTemplate(args)}>
        {{ '{' }}
          var helloWorld = "Hello World";
          console.log(helloWorld);
        {{ '}' }}
      </db-code-block>`,
  }),
};
