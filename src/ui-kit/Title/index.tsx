import React from 'react';
import styles from './styles.module.scss';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
}

const Title: React.FC<TitleProps> = ({ children, tag = 'h1', ...props }) => {
  const getFontSize = (tag: TitleProps['tag']): string => {
    switch (tag) {
      case 'h1':
        return '35px';
      case 'h2':
        return '28px';
      case 'h3':
        return '24px';
      case 'h4':
        return '18px';
      default:
        return 'inherit';
    }
  };

  const combinedStyle: React.CSSProperties = {
    fontSize: getFontSize(tag),
    ...props.style,
  };

  const CustomTitle = tag;
  return (
    <CustomTitle style={combinedStyle} className={styles.title}>
      {children}
    </CustomTitle>
  );
};

export default Title;
