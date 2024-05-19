import { forwardRef } from 'react';
import type { CSSProperties, ComponentPropsWithRef } from 'react';
import styled from '@emotion/styled';

import theme from '../styles/theme';
import Text from '../text/Text';

export interface TextareaProps extends ComponentPropsWithRef<'textarea'> {
  resize?: CSSProperties['resize'];
  errorMessage?: string;
}

const Textarea = ({
  resize = 'both',
  errorMessage,
  ref,
  ...props
}: TextareaProps) => {
  return (
    <>
      <TextareaContainer
        ref={ref}
        resize={resize}
        errorMessage={errorMessage}
        autoCapitalize='off'
        autoCorrect='off'
        spellCheck='false'
        {...props}
      />
      <Text size='xs' color={theme.colors.error} aria-live='assertive'>
        {errorMessage}
      </Text>
    </>
  );
};

export default forwardRef(Textarea);

type TextareaStyleProps = Pick<TextareaProps, 'resize'> & {
  errorMessage?: string;
};

const TextareaContainer = styled.textarea<TextareaStyleProps>`
  width: 100%;
  padding: 20px;
  background-color: ${theme.backgroundColors.light};
  border: 1px solid ${theme.borderColors.disabled};
  border-radius: 0;
  line-height: 1.5;
  resize: ${({ resize }) => resize};
  outline-color: ${({ errorMessage }) =>
    errorMessage ? theme.colors.error : theme.colors.primary};

  &::placeholder {
    color: ${theme.textColors.disabled};
  }
`;
