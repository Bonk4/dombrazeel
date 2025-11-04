import { CodeBlock } from './code-block';
import { Meta, StoryObj } from '@storybook/angular';

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
  }),
};

const typescriptCode: string = `{
\tconsole.log('Hello World!');
}`;
export const Typescript: Story = {
  render: ({ ...args }) => ({
    props: {
      title: 'helloWorld.ts',
      script: typescriptCode,
    },
  }),
};
