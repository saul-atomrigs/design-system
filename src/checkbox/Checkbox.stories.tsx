import React, { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Content for the checkbox label.',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    children: 'I agree to the terms and conditions.',
  },
};

export const Sizes: Story = {
  render: () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '40px' }}>
        <Checkbox size='xs' inputRef={inputRef}>
          I agree to the terms and conditions.',
        </Checkbox>
        <Checkbox size='sm' inputRef={inputRef}>
          I agree to the terms and conditions.',
        </Checkbox>
        <Checkbox size='md' inputRef={inputRef}>
          I agree to the terms and conditions.',
        </Checkbox>
        <Checkbox size='lg' inputRef={inputRef}>
          I agree to the terms and conditions.',
        </Checkbox>
        <Checkbox size='xl' inputRef={inputRef}>
          I agree to the terms and conditions.',
        </Checkbox>
      </div>
    );
  },
};
