import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { color, typography } from '../shared/styles';
import { glow } from '../shared/animation';
import { Icon } from '../Icon/Icon';

type AvatarProps = {
  size?: 'tiny' | 'small' | 'medium' | 'large';
  loading?: boolean;
  icon?: keyof typeof Icon;
  name?: string;
  src?: string;
  username?: string;
};

const SIZES = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16,
};

const Image = styled.div<AvatarProps>`
  background: ${(props) => (!props.loading ? 'transparent' : color.light)};
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-transform: uppercase;

  height: ${SIZES.medium}px;
  width: ${SIZES.medium}px;
  line-height: ${SIZES.medium}px;

  ${(props) =>
    props.size === 'tiny' &&
    css`
      height: ${SIZES.tiny}px;
      width: ${SIZES.tiny}px;
      line-height: ${SIZES.tiny}px;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      height: ${SIZES.small}px;
      width: ${SIZES.small}px;
      line-height: ${SIZES.small}px;
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      height: ${SIZES.large}px;
      width: ${SIZES.large}px;
      line-height: ${SIZES.large}px;
    `}

  ${(props) =>
    !props.src &&
    css`
      background: ${!props.loading && '#37D5D3'};
    `}

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  svg {
    position: relative;
    bottom: -2px;
    height: 100%;
    width: 100%;
    vertical-align: top;
  }

  path {
    fill: ${color.medium};
    animation: ${glow} 1.5s ease-in-out infinite;
  }
`;
// prettier-ignore
const Initial = styled.div<AvatarProps>`
  color: ${color.lightest};
  text-align: center;

  font-size: ${typography.size.s2}px;
  line-height: ${SIZES.medium}px;

  ${props => props.size === "tiny" && css`
    font-size: ${typography.size.s1}px;
    line-height: ${SIZES.tiny}px;
  `}

  ${props => props.size === "small" && css`
    font-size: ${typography.size.s2}px;
    line-height: ${SIZES.small}px;
  `}

  ${props => props.size === "large" && css`
    font-size: ${typography.size.s3}px;
    line-height: ${SIZES.large}px;
  `}
`;

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
export function Avatar({
  loading,
  username,
  src,
  size,
  ...props
}: AvatarProps) {
  let avatarFigure = <Icon icon='useralt' />;
  const a11yProps: { [key: string]: boolean | string | undefined } = {};

  if (loading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading avatar ...';
  } else if (src) {
    avatarFigure = <img src={src} alt={username} />;
  } else {
    a11yProps['aria-label'] = username;
    avatarFigure = (
      <Initial size={size} aria-hidden='true'>
        {username?.substring(0, 1)}
      </Initial>
    );
  }

  return (
    <Image size={size} loading={loading} src={src} {...a11yProps} {...props}>
      {avatarFigure}
    </Image>
  );
}
