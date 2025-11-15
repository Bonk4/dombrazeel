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
  render: () => ({
    props: {
      scripts: [
        {
          name: 'helloWorld.ts',
          code: 'console.log("hello, world!");',
        },
        {
          name: 'helloWorld.cs',
          code: `{
             \tConsole.Write("hello, world!");
             }`,
        },
        {
          name: 'helloWorld.sql',
          code: "select 'hello, world!' from main;",
        },
      ],
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
