import React from 'react';

type FontWeight = 'normal' | 'bold';
type TextSize = '14px' | '16px' | '20px' | '24px';

interface CustomTextProps {
  text: string;
  weight: FontWeight;
  size: TextSize;
}

const CustomText: React.FC<CustomTextProps> = ({ text, weight, size }) => {
  const textStyle: React.CSSProperties = {
    fontWeight: weight,
    fontSize: size,
  };

  return <span style={textStyle}>{text}</span>;
};

export default CustomText;
