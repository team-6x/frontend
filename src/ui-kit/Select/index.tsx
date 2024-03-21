import styles from './styles.module.scss';
import { Text } from '..';
import { CrossIcon, ChevronDown } from '../../assets/icons';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

interface SelectProps {
  options: { name: string; id: number }[];
  placeholder: string;
  label: string;
}

function Select({ options, placeholder, label }: SelectProps) {
  const [selected, setSelected] = useState(placeholder);
  const [isActive, setIsActive] = useState(false);

  const ref = useRef(null);
  useClickOutside(ref, () => setIsActive(false));

  const isFilled = selected !== placeholder ? styles.button_filled : '';
  const buttonStyle = `${styles.button} ${isActive ? styles.button_active : ''} ${isFilled}`;

  return (
    <div className={styles.dropdown} ref={ref}>
      <label className={styles.label}>
        <Text weight="bold" color="grey80">
          {label}
        </Text>
      </label>
      <button className={buttonStyle} onClick={() => setIsActive(!isActive)}>
        <Text color={isFilled ? 'black' : 'grey50'}>{selected}</Text>
        {isFilled ? (
          <CrossIcon
            className={styles.icon}
            onClick={e => {
              e.stopPropagation();
              setSelected(placeholder);
              setIsActive(false);
            }}
          />
        ) : (
          <ChevronDown
            className={`${styles.icon} ${isActive ? styles.icon_active : ''}`}
          />
        )}
      </button>
      {isActive && (
        <ul className={styles.list}>
          {options?.map(option => (
            <li
              key={option.id}
              onClick={() => {
                setSelected(option.name);
                setIsActive(false);
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
}

export default Select;
