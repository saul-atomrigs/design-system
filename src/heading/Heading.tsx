import type { ElementType } from 'react';
import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';

import type { FontWeightKeys } from '../styles/theme';
import type { OverridableComponentPropsWithoutRef, Sizes } from '../types';
import theme from '../styles/theme';

type HeadingElement = Extract<ElementType, 'h1' | 'h2' | 'h3'>;

interface HeadingStyleProps {
  element?: HeadingElement;
  size?: Sizes;
  weight?: FontWeightKeys;
  css?: typeof css;
}

export type HeadingProps<T extends HeadingElement> =
  OverridableComponentPropsWithoutRef<T, HeadingStyleProps>;

const Heading = <T extends HeadingElement = 'h1'>({
  children,
  size,
  as,
  css,
  ...props
}: HeadingProps<T>) => {
  return (
    <HeadingContainer as={as} element={as} size={size} css={css} {...props}>
      {children}
    </HeadingContainer>
  );
};

export default Heading;

type HeadingStyleFunction = (
  size: HeadingStyleProps['size']
) => SerializedStyles;

const headingSizeStyles: Record<HeadingElement, HeadingStyleFunction> = {
  h1: (size) => css`
    font-size: ${size ? theme.fontSizes[size] : '3.4rem'};
  `,
  h2: (size) => css`
    font-size: ${size ? theme.fontSizes[size] : '2.8rem'};
  `,
  h3: (size) => css`
    font-size: ${size ? theme.fontSizes[size] : '2.2rem'};
  `,
};

const HeadingContainer = styled.h1<HeadingStyleProps>`
  ${({ element, size }: HeadingStyleProps) =>
    headingSizeStyles[element ?? 'h1'](size)}
  font-weight: ${({ weight }: HeadingStyleProps) =>
    theme.fontWeights[weight ?? 'bold']};
`;
