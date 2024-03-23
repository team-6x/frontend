import styles from './styles.module.scss';
import { Text, Checkbox, Chip } from '..';
import { ChevronDown } from '../../assets/icons';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

interface MultiSelectProps {
  options: { name: string; id: number }[];
  placeholder?: string;
  label?: string | React.ReactNode;
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
          {typeof label === 'string' ? (
            <Text weight="bold" color="grey80">
              {label}
            </Text>
          ) : (
            label
          )}
        </label>
        <button className={buttonStyle} onClick={() => setIsActive(!isActive)}>
          <Text color="grey50">{placeholder}</Text>
          <ChevronDown
            className={`${styles.icon} ${isActive ? styles.icon_active : ''}`}
          />
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
      {selected.length > 0 && (
        <ul className={styles.chips}>
          {selected.map(item => (
            <li key={item}>
              <Chip label={item} onDelete={() => handleOptionChange(item)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MultiSelect;
