import { Meta, StoryObj } from '@storybook/angular';
import { Avatar } from './avatar';

const meta: Meta<Avatar> = {
  title: 'Library/Avatar',
  component: Avatar,
  tags: ['dombrazeel-library'],
};

export default meta;
type Story = StoryObj<Avatar>;

export const Default: Story = {
  render: () => ({
    template: `
      <db-avatar [img]="'img/avatar_cropped.jpg'">Primary</db-avatar>
    `,
  }),
};
