import React from 'react';
import { colors, size } from './design-tokens';

interface TxtProps {
  children: React.ReactNode;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  size?: keyof typeof size;
  color?: keyof typeof colors | string;
  style?: React.CSSProperties;
}

const weightMap = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

export const Txt = ({
  children,
  weight = 'normal',
  size: sizeKey = 'base',
  color = 'black',
  style,
}: TxtProps) => {
  const textColor =
    color in colors ? colors[color as keyof typeof colors] : color;

  return (
    <div
      style={{
        fontSize: size[sizeKey],
        fontWeight: weightMap[weight],
        color: textColor,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
