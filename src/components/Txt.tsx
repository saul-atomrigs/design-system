import React from 'react';
import { colors, size, fontWeight } from './design-tokens';

interface TxtProps {
  children: React.ReactNode;
  weight?: keyof typeof fontWeight;
  size?: keyof typeof size;
  color?: keyof typeof colors | string;
  style?: React.CSSProperties;
}

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
        fontWeight: fontWeight[weight],
        color: textColor,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
