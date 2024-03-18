interface CustomTextProps {
  children: string;
  weight?: 'normal' | 'bold';
  size?: '14px' | '16px' | '20px' | '24px';
  color?: 'black' | 'grey' | 'white';
}
const colorMap: { [key: string]: string } = {
  grey: 'var(--color-grey-50)',
  white: 'var(--color-primary-white)',
  black: 'var(--color-primary-black)',
};

const defineColor = (color: string) => colorMap[color] || colorMap.black;

const CustomText: React.FC<CustomTextProps> = ({
  children,
  weight,
  size,
  color = 'black',
}) => {
  const textStyle: React.CSSProperties = {
    fontWeight: weight,
    fontSize: size,
    color: defineColor(color),
  };

  return <span style={textStyle}>{children}</span>;
};

export default CustomText;
