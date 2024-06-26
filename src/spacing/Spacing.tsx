import type { ComponentPropsWithoutRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type SpacingDirections = 'vertical' | 'horizontal';

export interface SpacingProps extends ComponentPropsWithoutRef<'div'> {
  direction?: SpacingDirections;
  size: number;
}

const Spacing = ({ direction = 'vertical', size, ...props }: SpacingProps) => {
  return (
    <SpacingContainer
      aria-hidden='true'
      direction={direction}
      size={size}
      {...props}
    />
  );
};

export default Spacing;

type SpacingStyleProps = Pick<SpacingProps, 'direction' | 'size'>;
type SpacingSizeFunction = (
  size: SpacingStyleProps['size']
) => ReturnType<typeof css>;

const spacingDirectionStyle: Record<SpacingDirections, SpacingSizeFunction> = {
  vertical: (size) => css`
    height: ${size}px;
  `,
  horizontal: (size) => css`
    width: ${size}px;
  `,
};

const SpacingContainer = styled.div<SpacingStyleProps>`
  ${({ direction, size }) =>
    spacingDirectionStyle[direction ?? 'vertical'](size)}
`;
