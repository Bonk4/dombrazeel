import { Meta, StoryObj } from '@storybook/angular';
import { Landing } from './landing';

const meta: Meta<Landing> = {
  title: 'Library',
  component: Landing,
  tags: ['dombrazeel-library'],
};

export default meta;
type Story = StoryObj<Landing>;

export const Default: Story = {
  render: () => ({}),
};
