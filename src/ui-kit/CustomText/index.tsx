interface CustomTextProps {
  text: string;
  weight?: 'normal' | 'bold';
  size: '14px' | '16px' | '20px' | '24px';
  color?: 'black' | 'grey';
}

const CustomText: React.FC<CustomTextProps> = ({
  text,
  weight = 'normal',
  size,
  color = 'black',
}) => {
  const textStyle: React.CSSProperties = {
    fontWeight: weight,
    fontSize: size,
    color:
      color === 'grey' ? 'var(--color-grey-50)' : 'var(--color-primary-black)',
  };

  return <span style={textStyle}>{text}</span>;
};

export default CustomText;
