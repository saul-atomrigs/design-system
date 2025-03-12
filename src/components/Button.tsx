import React from 'react';
import { spacing } from './design-tokens';
import { colors } from './design-tokens';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  onClick,
  onMouseOut,
  onMouseOver,
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  const bgColor =
    variant === 'primary' ? colors['primary-500'] : colors['secondary-500'];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={{
        backgroundColor: bgColor,
        color: 'white',
        padding: `${spacing.small} ${spacing.large}`,
        borderRadius: `${spacing.tiny}`,
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.7 : 1,
        width: fullWidth ? '100%' : 'auto',
        transition: 'background-color 0.2s ease',
      }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {children}
    </button>
  );
};
