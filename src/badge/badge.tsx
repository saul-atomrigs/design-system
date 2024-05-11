import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { background, color, typography } from '../shared/styles';

type BadgeProps = {
  status?: 'positive' | 'negative' | 'warning' | 'error' | 'neutral';
};

const BadgeWrapper = styled.div<BadgeProps>`
  display: inline-block;
  vertical-align: top;
  font-size: 11px;
  line-height: 12px;
  padding: 4px 12px;
  border-radius: 3em;
  font-weight: ${typography.weight.bold};

  svg {
    height: 12px;
    width: 12px;
    margin-right: 4px;
    margin-top: -2px;
  }

  ${(props) =>
    props.status === 'positive' &&
    css`
      color: ${color.positive};
      background: ${background.positive};
    `};

  ${(props) =>
    props.status === 'negative' &&
    css`
      color: ${color.negative};
      background: ${background.negative};
    `};

  ${(props) =>
    props.status === 'warning' &&
    css`
      color: ${color.warning};
      background: ${background.warning};
    `};

  ${(props) =>
    props.status === 'error' &&
    css`
      color: ${color.lightest};
      background: ${color.negative};
    `};

  ${(props) =>
    props.status === 'neutral' &&
    css`
      color: ${color.dark};
      background: ${color.mediumlight};
    `};
`;

export function Badge({ ...props }) {
  return <BadgeWrapper {...props} />;
}
