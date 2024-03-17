import React from 'react';
import styles from './styles.module.scss';

type LabelProps = {
  text: string;
  variant: 'default' | 'success' | 'info';
  onClick?: () => void;
};

const Label: React.FC<LabelProps> = ({ text, variant, onClick }) => {
  const variantClass = styles[`label-${variant}`];
  return (
    <span className={`${styles.label} ${variantClass}`} onClick={onClick}>
      {text}
    </span>
  );
};

export default Label;
