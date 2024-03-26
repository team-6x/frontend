import React, { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import useDebounce from '../../hooks/useDebounce';

interface SearchInputProps {
  options?: ProfessionalRoleItemType[] | SkillsType[];
  placeholder?: string;
  handleStoreChange: ({ value, name }: { value: string; name: string }) => void;
  onSearch: (value: string) => void;
  inputName: string;
  initialValue: string | string[];
}

const SearchInput: React.FC<SearchInputProps> = ({
  options,
  placeholder,
  handleStoreChange,
  onSearch,
  inputName,
  initialValue = '',
}) => {
  const [searchValue, setSearchValue] = useState(initialValue);
  const [showDropdown, setShowDropdown] = useState(false);

  const debouncedSearch = useDebounce(searchValue, 300);

  useEffect(() => {
    if (debouncedSearch !== '' && typeof debouncedSearch === 'string')
      onSearch(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className={styles.label}>
      <input
        autoComplete="off"
        type="text"
        placeholder={placeholder}
        name={inputName}
        value={searchValue}
        className={styles.searchInput}
        onChange={e => {
          setSearchValue(e.target.value);
          setShowDropdown(true);
        }}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => {
          setTimeout(() => setShowDropdown(false), 100);
        }}
      />
      {options && showDropdown && (
        <ul className={styles.dropdown}>
          {options &&
            options.map(option => (
              <li
                key={option.id}
                className={styles.dropdownItem}
                onClick={() => {
                  handleStoreChange({ value: option.text, name: inputName });
                  setSearchValue(option.text);
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
