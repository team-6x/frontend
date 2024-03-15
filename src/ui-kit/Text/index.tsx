import React from 'react';

type FontWeight = 'normal' | 'bold';
type TextSize = '14px' | '16px' | '20px' | '24px';

interface CustomTextProps {
  children: string;
  weight: FontWeight;
  size: TextSize;
}

const Text: React.FC<CustomTextProps> = ({ children, weight, size }) => {
  const textStyle: React.CSSProperties = {
    fontWeight: weight,
    fontSize: size,
  };

  return <span style={textStyle}>{children}</span>;
};

export default Text;
