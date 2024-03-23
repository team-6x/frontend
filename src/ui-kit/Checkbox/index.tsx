import React, { useState } from 'react';
import styles from './styles.module.scss';

interface CheckboxProps {
  label?: string | React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  args?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled,
  name,
  ...args
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        className={styles.hiddenCheckbox}
        checked={isChecked}
        onChange={handleOnChange}
        disabled={disabled}
        name={name}
        {...args}
      />
      <span
        className={`${styles.styledCheckbox} ${isChecked ? styles.checked : ''}`}
      />
      {label && <span className={styles.checkboxLabel}>{label}</span>}
    </label>
  );
};

export default Checkbox;
