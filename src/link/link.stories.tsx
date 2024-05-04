import React from 'react';
import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../icon/Icon';
import { Link } from './Link';
import { StoryLinkWrapper } from '../link-wrapper/StoryLinkWrapper';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

const CustomLink = styled(Link)`
  && {
    color: red;
  }
`;

const onLinkClick = action('onLinkClick');

export const ALL: Story = {
  render: () => (
    <div>
      <Link href='https://storybook.js.org/tutorials/'>Default</Link>
      <br />
      <Link secondary href='https://storybook.js.org/tutorials/'>
        Secondary
      </Link>
      <br />
      <Link tertiary href='https://storybook.js.org/tutorials/'>
        tertiary
      </Link>
      <br />
      <Link nochrome href='https://storybook.js.org/tutorials/'>
        nochrome
      </Link>
      <br />
      <Link href='https://storybook.js.org/tutorials/'>
        <Icon icon='discord' aria-hidden />
        With icon in front
      </Link>
      <br />
      <Link
        containsIcon
        href='https://storybook.js.org/tutorials/'
        aria-label='Toggle side bar'
      >
        <Icon icon='sidebar' aria-hidden />
      </Link>
      <br />
      <Link containsIcon withArrow href='https://storybook.js.org/tutorials/'>
        With arrow behind
      </Link>
      <br />
      <span style={{ background: '#333' }}>
        <Link inverse href='https://storybook.js.org/tutorials/'>
          Inverted colors
        </Link>
      </span>
      <br />
      {/* gatsby and styled-components don't work nicely together  */}
      {/* eslint-disable-next-line */}
      <Link isButton onClick={onLinkClick}>
        is actually a button
      </Link>
      <br />
      <Link
        tertiary
        LinkWrapper={StoryLinkWrapper}
        href='http://storybook.js.org'
      >
        has a LinkWrapper like GatsbyLink or NextLink
      </Link>
      <br />
      <CustomLink
        tertiary
        LinkWrapper={StoryLinkWrapper}
        href='http://storybook.js.org'
      >
        has a LinkWrapper like GatsbyLink or NextLink with custom styling
      </CustomLink>
    </div>
  ),
};
