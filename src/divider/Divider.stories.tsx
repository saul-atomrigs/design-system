import type { Meta, StoryObj } from '@storybook/react';

import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    css: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Strong: Story = {
  args: {
    variant: 'strong',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
  },
};

export const HightLight: Story = {
  args: {
    customHeight: '4px',
  },
};
