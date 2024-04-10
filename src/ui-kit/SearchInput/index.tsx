import styles from './styles.module.scss';
import { CrossIcon } from '../../assets/icons';
import { useEffect, useState, useRef } from 'react';
import useDebounce from '../../hooks/useDebounce';
import useClickOutside from '../../hooks/useClickOutside';

interface ISearchInput {
  options?: ProfessionalRoleItemType[] | SkillsType[];
  placeholder?: string;
  state: string;
  setState: (value: string) => void;
  onSearch: ({ text }: { text: string }) => void;
}

const SearchInput: React.FC<ISearchInput> = ({
  options,
  placeholder,
  state,
  setState,
  onSearch,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [input, setInput] = useState(state);
  const debouncedSearch = useDebounce(input, 1300);
  const isFilled = input?.length > 0;

  useEffect(() => {
    if (debouncedSearch !== '' && typeof debouncedSearch === 'string')
      onSearch({ text: debouncedSearch });
  }, [debouncedSearch]);

  const ref = useRef(null);
  useClickOutside(ref, () => setShowDropdown(false));

  return (
    <div className={styles.label} ref={ref}>
      <input
        placeholder={placeholder}
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setShowDropdown(true);
          setInput(e.target.value);
          // if (debouncedSearch !== '' && typeof debouncedSearch === 'string')
          //   onSearch({ text: debouncedSearch });
        }}
        className={styles.searchInput}
        type="text"
        autoComplete="off"
      />
      {isFilled && (
        <CrossIcon
          id={styles.icon}
          onClick={() => {
            setState('');
            setInput('');
          }}
        />
      )}
      {options && showDropdown && (
        <ul className={styles.dropdown}>
          {options &&
            options.map(option => (
              <li
                key={option.id}
                className={styles.dropdown_item}
                onClick={() => {
                  setState(option.text);
                  setInput(option.text);
                  setShowDropdown(false);
                }}
              >
                {option.text}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
