import React from 'react';
import './index.scss';

type TypographyProps = {
  children: React.ReactNode;
  color?: 'primary' | 'light' | 'dark';
  variant?: 'h1' | 'h2' | 'body' | 'subtitle' | 'caption';
  bold?: boolean;
};

export const Typography = ({
  children,
  color,
  variant,
  bold,
}: TypographyProps) => {
  return (
    <p
      className={`text--${color ? color : 'dark'} text--${
        variant ? variant : 'body'
      } ${bold ? 'text--bold' : ''}`}
    >
      {children}
    </p>
  );
};
