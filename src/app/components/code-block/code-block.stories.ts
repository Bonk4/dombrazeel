import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { CodeBlock } from './code-block';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CodeBlock> = {
  title: 'Library/Code Block',
  component: CodeBlock,
  tags: ['dombrazeel-library'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<CodeBlock>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
