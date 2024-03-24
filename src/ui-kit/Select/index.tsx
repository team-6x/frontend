import styles from './styles.module.scss';
import { Text } from '..';
import { CrossIcon, ChevronDown } from '../../assets/icons';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

interface SelectProps {
  options: { name: string; id: number }[];
  placeholder: string;
  label?: string | React.ReactNode;
  handler?: () => void;
}

function Select({ options, placeholder, label, handler }: SelectProps) {
  const [selected, setSelected] = useState(placeholder);
  const [isActive, setIsActive] = useState(false);

  const ref = useRef(null);
  useClickOutside(ref, () => setIsActive(false));

  const isFilled = selected !== placeholder ? styles.button_filled : '';
  const buttonStyle = `${styles.button} ${isActive ? styles.button_active : ''} ${isFilled}`;
  const iconStyle = `${styles.icon} ${label ? styles.icon_label : ''}`;

  return (
    <div className={styles.dropdown} ref={ref}>
      {label && (
        <label className={styles.label}>
          {typeof label === 'string' ? (
            <Text weight="bold" color="grey80">
              {label}
            </Text>
          ) : (
            label
          )}
        </label>
      )}
      <button className={buttonStyle} onClick={() => setIsActive(!isActive)}>
        <Text color={isFilled ? 'black' : 'grey50'}>{selected}</Text>
        {isFilled ? (
          <CrossIcon
            className={iconStyle}
            onClick={e => {
              e.stopPropagation();
              setSelected(placeholder);
              setIsActive(false);
            }}
          />
        ) : (
          <ChevronDown
            className={`${iconStyle} ${isActive ? styles.icon_active : ''}`}
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
                if (handler) handler();
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
