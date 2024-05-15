import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    element: {
      table: { disable: true },
    },
    as: {
      description: 'HTML Tag',
    },
  },
  args: {
    children: 'This is a heading',
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {};

export const Variant: Story = {
  render: ({ children }) => (
    <>
      <Heading as='h1'>{children}</Heading>
      <Heading as='h2'>{children}</Heading>
      <Heading as='h3'>{children}</Heading>
    </>
  ),
};
