import React from 'react';

export const Checkbox = (
  props: React.InputHTMLAttributes<HTMLInputElement>
) => {
  return <input type='checkbox' {...props} />;
};
