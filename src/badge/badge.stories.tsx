import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const AllBadges = {
  args: {
    icon: 'facehappy',
    inline: true,
  },
  name: 'all badges',
  render: () => (
    <>
      <Badge status='positive'>Positive</Badge>
      <Badge status='negative'>Negative</Badge>
      <Badge status='neutral'>Neutral</Badge>
      <Badge status='error'>Error</Badge>
      <Badge status='warning'>Warning</Badge>
      <Badge status='positive'>Icon</Badge>
    </>
  ),
};

export const Positive = {
  args: {
    status: 'positive',
    children: 'Positive',
  },
};

export const Negative = {
  args: {
    status: 'negative',
    children: 'Negative',
  },
};
export const Warning = {
  args: {
    status: 'warning',
    children: 'Warning',
  },
};

export const Neutral = {
  args: {
    status: 'neutral',
    children: 'Neutral',
  },
};

export const Error = {
  args: {
    status: 'error',
    children: 'Error',
  },
};

export const WithIcon: Story = {
  args: {
    status: 'warning',
    icon: 'check',
    inline: true,
  },
  name: 'with icon',
  render: (args) => <Badge {...args}>with icon</Badge>,
};
