import styles from './styles.module.scss';
import { PlusIcon } from '../../assets/icons';
import { Chip, Gap } from '..';
import { useState } from 'react';

type InputProps = {
  label?: string | React.ReactNode;
  placeholder?: string;
  error?: boolean;
  errorText?: string;
  args?: React.InputHTMLAttributes<HTMLInputElement>;
  icon?: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  error,
  errorText,
  args,
  icon = false,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState<string[]>([]);

  const inputClass = `${styles.input} ${error ? styles.input_error : ''}`;

  return (
    <>
      <label className={styles.label}>
        {label && (
          <>
            {label}
            <Gap height={12} />
          </>
        )}
        {icon ? (
          <textarea
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder={placeholder}
            className={inputClass}
            rows={1}
          />
        ) : (
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            type="text"
            placeholder={placeholder}
            {...args}
            className={inputClass}
          />
        )}
        {icon && (
          <PlusIcon
            id={`${label ? styles.icon_label : styles.icon}`}
            onClick={() => {
              setChips([...chips, inputValue]);
              setInputValue('');
            }}
          />
        )}
        {icon && chips.length > 0 && (
          <>
            <Gap height={8} />
            <div className={styles.chips}>
              {chips?.map((chip, index) => {
                return (
                  <Chip
                    label={chip}
                    key={index}
                    onDelete={() =>
                      setChips(chips.filter((_, idx) => idx !== index))
                    }
                  />
                );
              })}
            </div>
          </>
        )}
      </label>
      {error && <span className={styles.errorMessage}>{errorText}</span>}
    </>
  );
};

export default Input;
