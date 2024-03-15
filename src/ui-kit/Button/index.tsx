import React from 'react';

import styles from './styles.module.scss';

type ButtonProps = {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
  view?: 'filled' | 'flat';
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
  view = 'filled',
  variant = 'primary',
}) => {
  const className = `${styles.button} ${view === 'flat' ? styles.button_flat : ''} ${
    variant === 'secondary' ? styles.button_secondary : ''
  }`;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
