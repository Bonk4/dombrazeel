import { Meta, StoryObj } from '@storybook/angular';
import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Library/Button',
  component: Button,
  tags: ['dombrazeel-library'],
};

export default meta;
type Story = StoryObj<Button>;

export const Primary: Story = {
  render: () => ({
    template: `
      <db-button>Primary</db-button>
    `,
  }),
};

export const Secondary: Story = {
  render: (args) => ({
    template: `
      <db-button type="secondary">Secondary</db-button>
    `,
  }),
};

export const Link: Story = {
  render: () => ({
    template: `
      <db-button type="link">Link</db-button>
    `,
  }),
};
