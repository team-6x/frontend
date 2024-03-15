import React from 'react';
import styles from './styles.module.scss';

type InputProps = {
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorText?: string;
  args?: React.InputHTMLAttributes<HTMLInputElement>;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  error,
  errorText,
  args,
}) => {
  const defineClass = () => {
    if (error) {
      return `${styles.input} ${styles.input_error}`;
    }
    return styles.input;
  };

  return (
    <>
      <label className={styles.label}>
        {label}
        <input
          type="text"
          placeholder={placeholder}
          {...args}
          className={defineClass()}
        />
      </label>
      {error && <span className={styles.errorMessage}>{errorText}</span>}
    </>
  );
};

export default Input;
