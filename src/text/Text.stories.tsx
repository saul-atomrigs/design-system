import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      table: { disable: true },
    },
  },
  args: {
    children: 'This is a text',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Sizes: Story = {
  render: ({ children }) => (
    <>
      <Text size='xs'>{children}</Text>
      <Text size='sm'>{children}</Text>
      <Text size='md'>{children}</Text>
      <Text size='lg'>{children}</Text>
      <Text size='xl'>{children}</Text>
    </>
  ),
};

export const Weights: Story = {
  render: ({ children }) => (
    <>
      <Text weight='light'>{children}</Text>
      <Text weight='regular'>{children}</Text>
      <Text weight='bold'>{children}</Text>
    </>
  ),
};

export const Aligns: Story = {
  render: ({ children }) => (
    <>
      <Text align='left' lineHeight='xl'>
        {children}
      </Text>
      <Text align='center' lineHeight='xl'>
        {children}
      </Text>
      <Text align='right' lineHeight='xl'>
        {children}
      </Text>
    </>
  ),
};
