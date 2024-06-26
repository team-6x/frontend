import { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './styles.module.scss';
import useClickOutside from '../../hooks/useClickOutside';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CustomCalendar({
  handleStoreChange,
  inputName,
}: {
  handleStoreChange: ({ value, name }: { value: string; name: string }) => void;
  inputName: string;
}) {
  const [value, setValue] = useState<Value>(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setIsOpen(false));

  const handleClick = (value: Value) => {
    setIsOpen(false);
    setValue(value);
    handleStoreChange({
      value: value?.toLocaleString().split(',')[0] || '',
      name: inputName,
    });
  };

  return (
    <div className={styles.calendarContainer} ref={ref}>
      <input
        type="text"
        value={(value && value.toLocaleString().split(',')[0]) || ''}
        onClick={() => setIsOpen(true)}
        className={styles.input}
      />
      {isOpen && (
        <Calendar
          className={styles.calendar}
          value={value}
          minDate={new Date()}
          onChange={value => handleClick(value)}
        />
      )}
    </div>
  );
}
