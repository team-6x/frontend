import styles from './styles.module.scss';
import { PlusIcon, CrossIcon } from '../../assets/icons';
import { Chip, Gap } from '..';
import { useState } from 'react';

type InputProps = {
  label?: string | React.ReactNode;
  placeholder?: string;
  error?: boolean;
  errorText?: string;
  args?: React.InputHTMLAttributes<HTMLInputElement>;
  icon?: boolean;
  inputName: string;
  handleStoreChange: ({
    value,
    name,
  }: {
    value: string | string[];
    name: string;
  }) => void;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  error,
  errorText,
  args,
  icon = false,
  handleStoreChange,
  inputName,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState<string[]>([]);

  const isFilled = inputValue.length > 0;
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
            name={inputName}
            onChange={e => setInputValue(e.target.value)}
            placeholder={placeholder}
            className={inputClass}
            rows={1}
          />
        ) : (
          <>
            <input
              value={inputValue}
              onChange={e => {
                setInputValue(e.target.value);
                handleStoreChange({
                  value: e.target.value,
                  name: inputName,
                });
              }}
              type="text"
              placeholder={placeholder}
              {...args}
              className={inputClass}
            />
            {isFilled && (
              <CrossIcon
                id={styles.icon}
                onClick={e => {
                  e.stopPropagation();
                  setInputValue('');
                  handleStoreChange({
                    value: '',
                    name: inputName,
                  });
                }}
              />
            )}
          </>
        )}
        {icon && (
          <PlusIcon
            id={`${label ? styles.icon_label : styles.icon}`}
            onClick={() => {
              setChips([...chips, inputValue]);
              setInputValue('');
              handleStoreChange({
                value: inputValue,
                name: inputName,
              });
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
                    onDelete={() => {
                      const newChips = chips.filter((_, idx) => idx !== index);
                      setChips(newChips);
                      handleStoreChange({
                        value: newChips,
                        name: inputName,
                      });
                    }}
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
