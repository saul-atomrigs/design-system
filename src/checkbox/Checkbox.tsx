import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import type { FontWeightKeys } from '../styles/theme';
import Text from '../text/Text';
import type { Sizes } from '../types';
import theme from '../styles/theme';

type CheckboxBaseProps = Pick<
  ComponentPropsWithRef<'input'>,
  'checked' | 'children' | 'onChange'
>;

export interface CheckboxProps extends CheckboxBaseProps {
  size?: Sizes;
  fontSize?: Sizes;
  weight?: FontWeightKeys;
  tabIndex?: -1 | 0 | 1;
  inputRef: React.RefObject<HTMLInputElement>;
}

const Checkbox = (
  {
    children,
    size = 'md',
    fontSize = 'md',
    weight = 'regular',
    tabIndex,
    inputRef,
    ...props
  }: CheckboxProps,
  labelRef: ForwardedRef<HTMLLabelElement>
) => {
  return (
    <CheckboxContainer
      ref={labelRef}
      fontSize={fontSize}
      weight={weight}
      tabIndex={tabIndex}
    >
      <CheckboxWrapper ref={inputRef} type='checkbox' size={size} {...props} />
      <CheckText as='span' size={size} aria-hidden='true' />
      <LabelText as='span'>{children}</LabelText>
    </CheckboxContainer>
  );
};

export default forwardRef(Checkbox);

type CheckboxStyleProps = Pick<CheckboxProps, 'size' | 'fontSize' | 'weight'>;

const checkboxSizeStyles = {
  xs: css`
    width: 20px;
    height: 20px;
  `,
  sm: css`
    width: 24px;
    height: 24px;
  `,
  md: css`
    width: 28px;
    height: 28px;
  `,
  lg: css`
    width: 32px;
    height: 32px;
  `,
  xl: css`
    width: 36px;
    height: 36px;
  `,
};

const checkSizeStyles = {
  xs: css`
    width: 4px;
    height: 8px;
    border: solid ${theme.colors.gray4};
    border-width: 0 2px 2px 0;
  `,
  sm: css`
    width: 6px;
    height: 12px;
    border: solid ${theme.colors.gray4};
    border-width: 0 2px 2px 0;
  `,
  md: css`
    width: 6px;
    height: 12px;
    border: solid ${theme.colors.gray4};
    border-width: 0 3px 3px 0;
  `,
  lg: css`
    width: 8px;
    height: 16px;
    border: solid ${theme.colors.gray4};
    border-width: 0 3px 3px 0;
  `,
  xl: css`
    width: 10px;
    height: 20px;
    border: solid ${theme.colors.gray4};
    border-width: 0 4px 4px 0;
  `,
};

const CheckboxContainer = styled.label<CheckboxStyleProps>`
  display: inline-flex;
  align-items: center;
  font-size: ${({ fontSize }) => theme.fontSizes[fontSize ?? 'md']};
  font-weight: ${({ weight }) => theme.fontWeights[weight ?? 'regular']};
  cursor: pointer;
`;

const CheckboxWrapper = styled.input<CheckboxStyleProps>`
  display: none;

  &:checked + span {
    background: ${theme.colors.primary};
    border: none;
  }

  &:checked + span::after {
    ${({ size }) => checkSizeStyles[size ?? 'md']}

    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

const CheckText = styled(Text)<CheckboxStyleProps>`
  ${({ size }) => checkboxSizeStyles[size ?? 'md']}

  position: relative;
  border: 2px solid ${theme.borderColors.disabled};
  border-radius: 4px;
`;

const LabelText = styled(Text)`
  margin-left: 12px;
`;
