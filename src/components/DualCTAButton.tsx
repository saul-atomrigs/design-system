import React from 'react';
import { colors, spacing } from './design-tokens';

interface DualCTAButtonProps {
  children: [React.ReactNode, React.ReactNode];
}

export const DualCTAButton = ({ children }: DualCTAButtonProps) => {
  if (!Array.isArray(children) || children.length !== 2) {
    throw new Error('DualCTAButton expects exactly two children');
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: spacing.base,
        backgroundColor: colors.white,
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: spacing.small,
          width: '100%',
          maxWidth: '400px',
        }}
      >
        {children[0]}
        {children[1]}
      </div>
    </div>
  );
};
