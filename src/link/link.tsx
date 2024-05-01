/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { darken } from 'polished';

import { Icon } from '../Icon/Icon';
import { color } from '../shared/styles';

type LinkProps = {
  isButton?: boolean;
  withArrow?: boolean;
  containsIcon?: boolean;
  LinkWrapper?: React.ElementType;
  inverse?: boolean;
  nochrome?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  children?: React.ReactNode;
};

const linkStyles = css`
  display: inline-block;
  transition:
    transform 150ms ease-out,
    color 150ms ease-out;
  text-decoration: none;

  color: ${color.secondary};

  &:hover,
  &:focus {
    cursor: pointer;
    transform: translateY(-1px);
    color: ${darken(0.07, color.secondary)};
  }
  &:active {
    transform: translateY(0);
    color: ${darken(0.1, color.secondary)};
  }

  svg {
    display: inline-block;
    height: 1em;
    width: 1em;
    vertical-align: text-top;
    position: relative;
    bottom: -0.125em;
    margin-right: 0.4em;
  }

  ${(props: LinkProps) =>
    props.containsIcon &&
    css`
      svg {
        height: 1em;
        width: 1em;
        vertical-align: middle;
        position: relative;
        bottom: 0;
        margin-right: 0;
      }
    `};

  ${(props: LinkProps) =>
    props.secondary &&
    css`
      color: ${color.mediumdark};

      &:hover {
        color: ${color.dark};
      }

      &:active {
        color: ${color.darker};
      }
    `};

  ${(props: LinkProps) =>
    props.tertiary &&
    css`
      color: ${color.dark};

      &:hover {
        color: ${color.darkest};
      }

      &:active {
        color: ${color.mediumdark};
      }
    `};

  ${(props: LinkProps) =>
    props.nochrome &&
    css`
      color: inherit;

      &:hover,
      &:active {
        color: inherit;
        text-decoration: underline;
      }
    `};

  ${(props: LinkProps) =>
    props.inverse &&
    css`
      color: ${color.lightest};

      &:hover {
        color: ${color.lighter};
      }

      &:active {
        color: ${color.light};
      }
    `};

  ${(props: LinkProps) =>
    props.isButton &&
    css`
      border: 0;
      border-radius: 0;
      background: none;
      padding: 0;
      font-size: inherit;
    `};
`;

const LinkInner = styled.span`
  ${(props: LinkProps) =>
    props.withArrow &&
    css`
      > svg:last-of-type {
        height: 0.7em;
        width: 0.7em;
        margin-right: 0;
        margin-left: 0.25em;
        bottom: auto;
        vertical-align: inherit;
      }
    `};
`;

const LinkA = styled.a`
  ${linkStyles};
`;

const LinkButton = styled.button`
  /* reset button styles */
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  ${linkStyles};
`;

const applyStyle = (LinkWrapper: React.ElementType) => {
  return (
    LinkWrapper &&
    styled(
      ({
        containsIcon,
        inverse,
        nochrome,
        secondary,
        tertiary,
        ...linkWrapperRest
      }: LinkProps) => <LinkWrapper {...linkWrapperRest} />
    )`
      ${linkStyles};
    `
  );
};

/**
 * Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.
 */
export function Link({
  isButton,
  withArrow,
  LinkWrapper,
  children,
  ...rest
}: LinkProps) {
  const content = (
    <>
      <LinkInner withArrow={withArrow}>
        {children}
        {withArrow && <Icon icon='arrowright' />}
      </LinkInner>
    </>
  );

  let SelectedLink: React.ElementType = LinkA;
  if (LinkWrapper) {
    SelectedLink = applyStyle(LinkWrapper);
  } else if (isButton) {
    SelectedLink = LinkButton;
  }

  return <SelectedLink {...rest}>{content}</SelectedLink>;
}
