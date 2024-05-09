import type { CSSProperties, ElementType } from 'react';
import styled from '@emotion/styled';

import type { FontWeightKeys } from '../styles/theme';
import theme from '../styles/theme';
import type { Sizes, OverridableComponentPropsWithoutRef } from '../types';

type TextElement = Extract<ElementType, 'p' | 'span'>;
type TextAligns = 'left' | 'center' | 'right';
type TextStyleProps = {
  size?: Sizes;
  weight?: FontWeightKeys;
  lineHeight?: Sizes;
  color?: CSSProperties['color'];
  align?: TextAligns;
};
type TextProps<T extends TextElement> = OverridableComponentPropsWithoutRef<
  T,
  TextStyleProps
>;

const Text = <T extends TextElement = 'p'>({
  children,
  size = 'md',
  weight = 'regular',
  lineHeight = 'md',
  color = theme.textColors.default,
  align = 'left',
  ...props
}: TextProps<T>) => {
  return (
    <TextContainer
      size={size}
      weight={weight}
      lineHeight={lineHeight}
      color={color}
      align={align}
      {...props}
    >
      {children}
    </TextContainer>
  );
};

export default Text;

const TextContainer = styled.p<TextStyleProps>`
  font-size: ${({ size }) => theme.fontSizes[size ?? 'md']};
  font-weight: ${({ weight }) => theme.fontWeights[weight ?? 'regular']};
  line-height: ${({ lineHeight }) => theme.lineHeights[lineHeight ?? 'md']};
  color: ${({ color }) => color ?? theme.textColors.default};
  text-align: ${({ align }) => align};
`;
