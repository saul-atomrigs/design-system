import type { ComponentPropsWithoutRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../styles/theme';

export interface DividerProps extends ComponentPropsWithoutRef<'hr'> {
  variant?: 'default' | 'strong' | 'disabled';
  customWidth?: string;
  customHeight?: string;
  css?: string;
}

const Divider = ({
  variant = 'default',
  customWidth = '100%',
  customHeight = '1px',
  ...props
}: DividerProps) => {
  return (
    <DividerContainer
      variant={variant}
      customWidth={customWidth}
      customHeight={customHeight}
      {...props}
    />
  );
};

export default Divider;

type DividerStyleProps = Pick<
  DividerProps,
  'variant' | 'customWidth' | 'customHeight' | 'css'
>;

const dividerStyles = {
  default: css`
    background: ${theme.dividerColors.default};
  `,
  strong: css`
    background: ${theme.dividerColors.strong};
  `,
  disabled: css`
    background: ${theme.dividerColors.disabled};
  `,
};

const DividerContainer = styled.hr<DividerStyleProps>`
  ${({ variant }) => dividerStyles[variant ?? 'default']};
  height: 1px;
  width: ${({ customWidth }) => customWidth};
  height: ${({ customHeight }) => customHeight};
  border: 0;

  ${({ css }) => css}
`;
