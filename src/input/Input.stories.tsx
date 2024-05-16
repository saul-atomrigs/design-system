import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    rightIcon: {
      control: { type: 'boolean' },
      mapping: { false: '', true: '🔎' },
    },
  },
  args: {
    customWidth: '300px',
    isError: false,
    rightIcon: false,
    errorMessage: '',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Search the product.',
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: 'Search the product.',
    rightIcon: true,
  },
};

export const Error: Story = {
  args: {
    isError: true,
    errorMessage: 'Should be less than 10 characters.',
  },
};

export const Disabled: Story = {
  render: () => <Input disabled />,
};
