import styles from './styles.module.scss';
import { CrossIcon } from '../../assets/icons';
import { Text } from '..';

interface IInput {
  label?: string | React.ReactNode;
  placeholder?: string;
  state: string;
  setState: (value: string) => void;
  error?: string;
}

const Input: React.FC<IInput> = ({
  label,
  placeholder,
  error,
  state,
  setState,
}) => {
  const isFilled = state?.length > 0;
  const inputClass = `${styles.input} ${error ? styles.input_error : ''}`;
  const iconClass = `${label ? styles.icon_label : styles.icon}`;

  const labelElement =
    typeof label === 'string' ? (
      <Text weight="bold" color="grey80">
        {label}
      </Text>
    ) : (
      label
    );

  return (
    <>
      <div className={styles.label}>
        {label && labelElement}
        <input
          value={state}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setState(e.target.value)
          }
          placeholder={placeholder}
          type="text"
          className={inputClass}
        />
        {isFilled && <CrossIcon id={iconClass} onClick={() => setState('')} />}
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </>
  );
};

export default Input;
