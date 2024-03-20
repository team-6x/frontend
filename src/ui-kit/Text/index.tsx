interface CustomTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: string | React.ReactNode;
  weight?: 'normal' | 'bold';
  size?: '14px' | '16px' | '20px' | '24px';
  color?: 'black' | 'grey50' | 'grey60' | 'grey80' | 'white' | 'blue';
}
const colorMap: { [key: string]: string } = {
  grey50: 'var(--color-grey-50)',
  grey60: 'var(--color-grey-60)',
  grey80: 'var(--color-grey-80)',
  white: 'var(--color-primary-white)',
  black: 'var(--color-primary-black)',
  blue: 'var(--color-blue-60)',
};

const defineColor = (color: string) => colorMap[color] || colorMap.black;

const CustomText: React.FC<CustomTextProps> = ({
  children,
  weight = 'normal',
  size = '14px',
  color = 'black',
  ...props
}) => {
  const textStyle: React.CSSProperties = {
    fontWeight: weight,
    fontSize: size,
    color: defineColor(color),
  };

  const combinedStyle: React.CSSProperties = {
    ...textStyle,
    ...props.style,
  };

  return <span style={combinedStyle}>{children}</span>;
};

export default CustomText;
