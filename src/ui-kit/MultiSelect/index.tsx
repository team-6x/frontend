import styles from './styles.module.scss';
import { Text, Checkbox, Chip } from '..';
import { ChevronDown } from '../../assets/icons';
import { useState, useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

interface MultiSelectProps {
  options?: { name: string; id: string }[];
  placeholder?: string;
  label?: string | React.ReactNode;
  state: string[];
  setState: (value: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  placeholder,
  label,
  state,
  setState,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleOptionChange = (option: string) => {
    const newSelection = state.includes(option)
      ? state.filter(item => item !== option)
      : [...state, option];
    setState(newSelection);
  };
  const ref = useRef(null);
  useClickOutside(ref, () => setShowDropdown(false));

  //styles
  const isFilledButton = state.length > 0 ? styles.button_filled : '';
  const buttonStyle = `${styles.button} ${showDropdown ? styles.button_active : ''} ${isFilledButton}`;
  const isShowDropdown = showDropdown ? styles.icon_active : '';
  const hasLabel = label ? styles.icon_label : '';
  const iconStyle = `${styles.icon} ${isShowDropdown} ${hasLabel}`;

  const labelElement =
    typeof label === 'string' ? (
      <Text weight="bold" color="grey80">
        {label}
      </Text>
    ) : (
      label
    );

  return (
    <div className={styles.multiSelect} ref={ref}>
      <div>
        <div className={styles.box}>
          {label && labelElement}
          <button
            type="button"
            className={buttonStyle}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Text color="grey50">{placeholder}</Text>
            <ChevronDown className={iconStyle} />
          </button>
        </div>
        {showDropdown && (
          <ul className={styles.list}>
            {options?.map(option => (
              <li
                key={option.id}
                onChange={() => handleOptionChange(option.name)}
                className={styles.option}
              >
                <Checkbox
                  label={option.name}
                  checked={state.includes(option.name)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      {state.length > 0 && (
        <ul className={styles.chips_list}>
          {state.map(item => (
            <li key={item}>
              <Chip label={item} onDelete={() => handleOptionChange(item)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelect;
