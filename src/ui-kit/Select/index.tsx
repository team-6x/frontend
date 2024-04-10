import styles from './styles.module.scss';
import { Text } from '..';
import { CrossIcon, ChevronDown } from '../../assets/icons';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

interface ISelect {
  options: { name: string; id: string }[];
  placeholder: string;
  label?: string | React.ReactNode;
  state: string;
  setState: (value: string) => void;
}

const Select: React.FC<ISelect> = ({
  options,
  placeholder,
  label,
  state,
  setState,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const ref = useRef(null);
  useClickOutside(ref, () => setShowDropdown(false));

  //styles
  const isFilled = state !== placeholder && state !== '';
  const isFilledButton = isFilled ? styles.button_filled : '';
  const buttonStyle = `${styles.button} ${showDropdown ? styles.button_active : ''} ${isFilledButton}`;
  const isShowDropdown = showDropdown ? styles.icon_active : '';
  const hasLabel = label ? styles.icon_label : '';
  const iconStyle = `${styles.icon} ${hasLabel}`;

  const labelElement =
    typeof label === 'string' ? (
      <Text weight="bold" color="grey80">
        {label}
      </Text>
    ) : (
      label
    );

  return (
    <div className={styles.dropdown} ref={ref}>
      <div className={styles.box}>
        {labelElement}
        <button
          className={buttonStyle}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <Text color={isFilled ? 'black' : 'grey50'}>
            {state || placeholder}
          </Text>
          {isFilled ? (
            <CrossIcon
              className={iconStyle}
              onClick={() => {
                setState(placeholder);
                setShowDropdown(false);
              }}
            />
          ) : (
            <ChevronDown className={`${iconStyle} ${isShowDropdown}`} />
          )}
        </button>
      </div>
      {showDropdown && (
        <ul className={styles.list}>
          {options?.map(option => (
            <li
              key={option.id}
              onClick={() => {
                setState(option.name);
                setShowDropdown(false);
              }}
              className={styles.option}
            >
              <Text>{option.name}</Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
