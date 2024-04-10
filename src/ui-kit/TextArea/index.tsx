import styles from './styles.module.scss';
import { PlusIcon } from '../../assets/icons';
import { Chip, Gap, Text } from '..';

interface ITextArea {
  label?: string | React.ReactNode;
  placeholder?: string;
  error?: string;
  inputState: string;
  setInputState: (value: string) => void;
  chipsState: string[];
  setChipsState: (value: string[]) => void;
}

const TextArea: React.FC<ITextArea> = ({
  label,
  placeholder,
  inputState,
  setInputState,
  error,
  chipsState,
  setChipsState,
}) => {
  const isFilled = chipsState.length > 0;
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
      <label className={styles.label}>
        <div className={styles.box}>
          {label && labelElement}
          <textarea
            value={inputState}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setInputState(e.target.value)
            }
            placeholder={placeholder}
            className={inputClass}
            rows={1}
          />
        </div>
        <PlusIcon
          id={iconClass}
          onClick={() => {
            const newChips = [...chipsState, inputState];
            setChipsState(newChips);
            setInputState('');
          }}
        />
        {isFilled && (
          <>
            <Gap height={8} />
            <div className={styles.chips}>
              {chipsState?.map((chip, index) => (
                <Chip
                  label={chip}
                  key={index}
                  onDelete={() => {
                    const newChips = chipsState.filter(
                      (_, idx) => idx !== index,
                    );
                    setChipsState(newChips);
                  }}
                />
              ))}
            </div>
          </>
        )}
      </label>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </>
  );
};

export default TextArea;
