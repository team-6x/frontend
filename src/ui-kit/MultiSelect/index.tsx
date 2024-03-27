import styles from './styles.module.scss';
import { Text, Checkbox, Chip } from '..';
import { ChevronDown } from '../../assets/icons';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { useAppSelector } from '../../hooks/redux';

interface MultiSelectProps {
  options: { name: string; id: string }[];
  placeholder?: string;
  label?: string | React.ReactNode;
  handleStoreChange: ({
    value,
    name,
  }: {
    value: string | string[];
    name: string;
  }) => void;
  inputName: string;
  initialValue: string[];
}

function MultiSelect({
  options,
  placeholder,
  label,
  handleStoreChange,
  inputName,
  initialValue,
}: MultiSelectProps) {
  const [selected, setSelected] = useState<string[]>(initialValue);
  const [isActive, setIsActive] = useState(false);

  const results = useAppSelector(state => state.results);

  const ref = useRef(null);
  useClickOutside(ref, () => setIsActive(false));

  const handleOptionChange = (option: string) => {
    const newSelection = selected.includes(option)
      ? selected.filter(item => item !== option)
      : [...selected, option];
    setSelected(newSelection);

    if (
      results.firstResult[inputName] !== option ||
      results.thirdResult[inputName]
    ) {
      handleStoreChange({ value: option, name: inputName });
    } else {
      handleStoreChange({ value: '', name: inputName });
    }
  };

  const isFilled = selected.length > 0 && styles.button_filled;
  const buttonStyle = `${styles.button} ${isActive ? styles.button_active : ''} ${isFilled}`;
  const iconStyle = `${styles.icon} ${isActive ? styles.icon_active : ''} ${label ? styles.icon_label : ''}`;

  console.log(selected);
  return (
    <div className={styles.dropdown} ref={ref}>
      <div>
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
          <Text color="grey50">{placeholder}</Text>
          <ChevronDown className={iconStyle} />
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
      {selected && (
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
