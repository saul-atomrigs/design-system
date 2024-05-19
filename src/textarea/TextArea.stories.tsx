import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';

import Textarea from './TextArea';
import theme from '../styles/theme';
import Text from '../text/Text';

const meta: Meta<typeof Textarea> = {
  title: 'Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    resize: {
      description: 'Textarea resize direction.',
      control: 'radio',
      options: ['both', 'horizontal', 'vertical', 'none'],
    },
    placeholder: {
      description: 'Textarea placeholder.',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Write at least 20 characters.',
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const maxLength = 200;

    const handleInputChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      setValue(e.currentTarget.value);
    };

    return (
      <div style={{ position: 'relative' }}>
        <Textarea
          value={value}
          rows={10}
          onChange={handleInputChange}
          maxLength={maxLength}
        />
        <Text
          style={{ position: 'absolute', right: 0 }}
          color={theme.textColors.info}
        >
          Characters writen so far: {value.length} / {maxLength}
        </Text>
      </div>
    );
  },
};
