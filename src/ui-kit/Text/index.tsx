const CustomText: React.FC<CustomTextProps> = ({
  children,
  weight = 'normal',
  size = '14px',
  color = 'black',
}) => {
  const getColor = (color: string) => {
    switch (color) {
      case 'grey50':
        return 'var(--color-grey-50)';
      case 'grey80':
        return 'var(--color-grey-80)';
      default:
        return 'var(--color-primary-black)';
    }
  };
  const textStyle: React.CSSProperties = {
    fontWeight: weight,
    fontSize: size,
    color: getColor(color),
  };

  return <span style={textStyle}>{children}</span>;
};

export default CustomText;
