import { Meta, StoryObj } from '@storybook/angular';
import { Card } from './card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Card> = {
  title: 'Library/Card',
  component: Card,
  tags: ['dombrazeel-library'],
};

export default meta;
type Story = StoryObj<Card>;

export const Default: Story = {
  render: () => ({
    props: {
      title: 'Title',
      desc: 'Description text.',
    },
  }),
};

export const WithImage: Story = {
  render: () => ({
    props: {
      title: 'Title',
      desc: 'Description text.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1280px-Microsoft_.NET_logo.svg.png',
    },
  }),
};
