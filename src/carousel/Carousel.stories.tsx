import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  component: Carousel,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Carousel
      carouselList={[
        { id: 1, children: '1' },
        { id: 2, children: '2' },
        { id: 3, children: '3' },
      ]}
    />
  ),
};
