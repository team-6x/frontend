import styles from './styles.module.scss';
import { Text, Checkbox, Chip } from '..';
import { CrossIcon } from '../../assets/icons';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

interface MultiSelectProps {
  options: { name: string; id: number }[];
  placeholder: string;
  label: string;
}

function MultiSelect({ options, placeholder, label }: MultiSelectProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);

  const ref = useRef(null);
  useClickOutside(ref, () => setIsActive(false));

  const handleOptionChange = (option: string) => {
    const newSelection = selected.includes(option)
      ? selected.filter(item => item !== option)
      : [...selected, option];
    setSelected(newSelection);
  };

  const isFilled = selected.length ? styles.button_filled : '';
  const buttonStyle = `${styles.button} ${isActive ? styles.button_active : ''} ${isFilled}`;

  return (
    <div className={styles.dropdown} ref={ref}>
      <div>
        <label className={styles.label}>
          <Text weight="bold" color="grey80">
            {label}
          </Text>
        </label>
        <button className={buttonStyle} onClick={() => setIsActive(!isActive)}>
          <Text color="grey50">{placeholder}</Text>
          {(isFilled || isActive) && (
            <CrossIcon
              className={styles.icon}
              onClick={e => {
                e.stopPropagation();
                setSelected([]);
                setIsActive(false);
              }}
            />
          )}
        </button>
        {isActive && (
          <ul className={styles.list}>
            {options?.map(option => (
              <li
                key={option.id}
                onChange={() => handleOptionChange(option.name)}
                className={styles.option}
              >
                <Checkbox
                  label={option.name}
                  checked={selected.includes(option.name)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul className={styles.chips}>
        {selected.map(item => (
          <li key={item}>
            <Chip label={item} onDelete={() => handleOptionChange(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MultiSelect;
