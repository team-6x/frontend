const CustomText: React.FC<CustomTextProps> = ({
  children,
  weight,
  size,
  color,
}) => {
  const textStyle: React.CSSProperties = {
    fontWeight: weight,
    fontSize: size,
    color:
      color === 'grey' ? 'var(--color-grey-50)' : 'var(--color-primary-black)',
  };

  return <span style={textStyle}>{children}</span>;
};

export default CustomText;
