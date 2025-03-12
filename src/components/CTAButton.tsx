import React from 'react';
import { Button } from './Button';
import { spacing } from './design-tokens/spacing';
import { colors } from './design-tokens/colors';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const CTAButton = ({
  children,
  onClick,
  disabled,
  type = 'button',
}: CTAButtonProps) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: spacing.base,
        backgroundColor: colors.white,
        boxShadow: `0 -2px 5px rgba(${colors.black}, 0.1)`,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Button fullWidth onClick={onClick} disabled={disabled} type={type}>
        {children}
      </Button>
    </div>
  );
};
