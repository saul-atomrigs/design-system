import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../icon/Icon';
import { icons } from '../shared/icons';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;

const Item = styled.li<Story & { minimal?: boolean }>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  padding: 0px 7.5px 20px;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }

  ${(props) =>
    props.minimal &&
    css`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      border: 1px solid #666;

      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `};
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

export const Labels: Story = {
  render: () => (
    <>
      There are {Object.keys(icons).length} icons
      <List>
        {Object.keys(icons).map((key) => (
          <Item key={key}>
            <Icon icon={key} aria-hidden />
            <Meta>{key}</Meta>
          </Item>
        ))}
      </List>
    </>
  ),
};

export const NoLabels: Story = {
  name: 'no labels',
  render: () => (
    <List>
      {Object.keys(icons).map((key) => (
        <Item minimal key={key}>
          <Icon icon={key} aria-label={key} />
        </Item>
      ))}
    </List>
  ),
};

export const Inline: Story = {
  render: (args) => (
    <>
      this is an inline <Icon {...args} /> icon (default)
    </>
  ),
  args: {
    icon: 'facehappy',
  },
};

export const Block: Story = {
  render: (args) => (
    <>
      this is a block <Icon {...args} /> icon
    </>
  ),
  args: {
    icon: 'facehappy',
    block: true,
  },
};
