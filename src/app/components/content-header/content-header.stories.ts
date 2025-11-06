import { Meta, StoryObj } from '@storybook/angular';
import { ContentHeader } from './content-header';

const meta: Meta<ContentHeader> = {
  title: 'Library/Header',
  component: ContentHeader,
  tags: ['dombrazeel-library'],
};

export default meta;
type Story = StoryObj<ContentHeader>;

export const Default: Story = {
  render: () => ({
    template: `
      <db-content-header>Header Content</db-content-header>
    `,
  }),
};
