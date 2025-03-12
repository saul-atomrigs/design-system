import React from 'react';
import { colors } from './design-tokens/colors';

interface TxtProps {
  children: React.ReactNode;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  color?: keyof typeof colors | string;
  style?: React.CSSProperties;
}

const sizeMap = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
};

const weightMap = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

export const Txt = ({
  children,
  weight = 'normal',
  size = 'base',
  color = 'black',
  style,
}: TxtProps) => {
  // Determine if the color is a token or a direct color value
  const textColor =
    color in colors ? colors[color as keyof typeof colors] : color;

  return (
    <div
      style={{
        fontSize: sizeMap[size],
        fontWeight: weightMap[weight],
        color: textColor,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
