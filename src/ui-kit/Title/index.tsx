import React from 'react';
import styles from './styles.module.scss';

type TitleProps = {
  text: string;
  tag: 'h1' | 'h2' | 'h3';
};

const Title: React.FC<TitleProps> = ({ text, tag = 'h1' }) => {
  const getFontSize = (tag: TitleProps['tag']): string => {
    switch (tag) {
      case 'h1':
        return '35px';
      case 'h2':
        return '24px';
      case 'h3':
        return '18px';
      default:
        return 'inherit';
    }
  };

  const style = {
    fontSize: getFontSize(tag),
  };

  const CustomTitle = tag as keyof JSX.IntrinsicElements;
  return (
    <CustomTitle style={style} className={styles.title}>
      {text}
    </CustomTitle>
  );
};

export default Title;
