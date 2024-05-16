import type { ComponentPropsWithRef, ForwardedRef, ReactNode } from 'react';
import { forwardRef } from 'react';
import styled from '@emotion/styled';

import Text from '../text/Text';
import theme from '../styles/theme';

export interface InputProps extends ComponentPropsWithRef<'input'> {
  customWidth?: string;
  minWidth?: string;
  isError?: boolean;
  rightIcon?: ReactNode;
  errorMessage?: string;
}

const Input = forwardRef(
  (
    {
      customWidth = '300px',
      minWidth,
      isError = false,
      rightIcon,
      errorMessage,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        <InputContainer customWidth={customWidth} minWidth={minWidth}>
          <CustomInput ref={ref} isError={isError} {...props} />
          {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
        </InputContainer>
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    );
  }
);

Input.displayName = 'Input';

export default Input;

type InputContainerStyleProps = Pick<InputProps, 'customWidth' | 'minWidth'>;
type CustomInputStyleProps = Pick<InputProps, 'isError'>;

const InputContainer = styled.div<InputContainerStyleProps>`
  position: relative;
  min-width: ${({ minWidth }) => minWidth ?? 0};
  max-width: ${({ customWidth }) => customWidth};
  text-align: center;
`;

const CustomInput = styled.input<CustomInputStyleProps>`
  width: 100%;
  height: 40px;
  padding: 10px 0 10px 12px;
  color: ${({ isError }) =>
    isError ? theme.colors.error : theme.textColors.default};
  border: 1px solid
    ${({ isError }) =>
      isError ? theme.colors.error : theme.borderColors.default};
  border-radius: 5px;

  &:focus {
    border: 2px solid
      ${({ isError }) =>
        isError ? theme.colors.error : theme.borderColors.strong};
    outline: none;
  }

  &:disabled {
    border: 1px solid ${theme.borderColors.disabled};
    background: ${theme.colors.gray1};
  }

  &::placeholder {
    color: ${theme.textColors.disabled};
    font-size: ${theme.fontSizes.sm};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
`;

const ErrorMessage = styled(Text)`
  color: ${theme.colors.error};
  font-size: ${theme.fontSizes.xs};
`;
