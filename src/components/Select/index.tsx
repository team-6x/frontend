import styles from './styles.module.scss';
import { Text } from '../../ui-kit';
import { CloseCross, DropDownArrow } from '../../assets/icons';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

function Select({ options, placeholder, label }: SelectProps) {
  const [selected, setSelected] = useState(placeholder);
  const [isActive, setIsActive] = useState(false);

  const ref = useRef(null);

  useClickOutside(ref, () => {
    setIsActive(false);
  });

  const buttonStyle = `${styles.button} ${isActive ? styles.button_active : ''} ${selected !== placeholder && !isActive ? styles.button_filled : ''}`;

  return (
    <div className={styles.dropdown}>
      <label htmlFor="select" className={styles.label}>
        <Text weight="bold" color="grey80">
          {label}
        </Text>
      </label>
      <div
        className={buttonStyle}
        ref={ref}
        onClick={() => setIsActive(!isActive)}
      >
        {selected}
        {!isActive ? (
          <DropDownArrow className={styles.icon} />
        ) : (
          <CloseCross
            className={styles.icon}
            onClick={() => setSelected(placeholder)}
          />
        )}
      </div>
      {isActive && (
        <div className={styles.list}>
          {options?.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className={styles.option}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
