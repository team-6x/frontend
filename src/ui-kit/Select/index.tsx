import styles from './styles.module.scss';
import { Text } from '..';
import { CloseCross, DropDownArrow } from '../../assets/icons';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

interface SelectProps {
  options: string[];
  placeholder: string;
  label: string;
}

function Select({ options, placeholder, label }: SelectProps) {
  const [selected, setSelected] = useState(placeholder);
  const [isActive, setIsActive] = useState(false);

  const ref = useRef(null);
  useClickOutside(ref, () => setIsActive(false), isActive);

  const isFilled =
    selected !== placeholder && !isActive ? styles.button_filled : '';
  const buttonStyle = `${styles.button} ${isActive ? styles.button_active : ''} ${isFilled}`;

  return (
    <div className={styles.dropdown}>
      <label className={styles.label}>
        <Text weight="bold" color="grey80">
          {label}
        </Text>
      </label>
      <button
        className={buttonStyle}
        ref={ref}
        onClick={() => setIsActive(!isActive)}
      >
        <Text color={isFilled ? 'black' : 'grey50'}>{selected}</Text>
        {!isActive ? (
          <DropDownArrow className={styles.icon} />
        ) : (
          <CloseCross
            className={styles.icon}
            onClick={() => setSelected(placeholder)}
          />
        )}
      </button>
      {isActive && (
        <ul className={styles.list}>
          {options?.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className={styles.option}
            >
              <Text>{option}</Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
