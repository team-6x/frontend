import styles from './styles.module.scss';
import { Text } from '../../ui-kit';
import { CloseCross, DropDownArrow } from '../../assets/icons';
import { useState } from 'react';
import usePopupClose from '../../hooks/usePopupClose';

function Select({ options, placeholder, label }: SelectProps) {
  const [selected, setSelected] = useState(placeholder);
  const [isActive, setIsActive] = useState(false);
  usePopupClose(isActive, styles.option, styles.button, styles.icon, () =>
    setIsActive(!isActive),
  );
  const buttonStyle = `${styles.button} ${isActive ? styles.button_active : null} ${selected !== placeholder && !isActive ? styles.button_filled : null}`;

  return (
    <div className={styles.dropdown}>
      <label htmlFor="select" className={styles.label}>
        <Text weight="bold" color="grey80">
          {label}
        </Text>
      </label>
      <div className={buttonStyle} onClick={() => setIsActive(!isActive)}>
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
