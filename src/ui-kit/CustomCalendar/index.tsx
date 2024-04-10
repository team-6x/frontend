import { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './styles.module.scss';
import useClickOutside from '../../hooks/useClickOutside';
import { INITIAL_DATE, INITIAL_DATE_STR } from '../../utils/constans';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface ICustomCalendar {
  setState: (value: string) => void;
  state: string;
}

const CustomCalendar: React.FC<ICustomCalendar> = ({ state, setState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setIsOpen(false));

  const handleClick = (value: Value) => {
    setIsOpen(false);
    setState(value?.toLocaleString().split(',')[0] || '');
  };

  return (
    <div className={styles.calendarContainer} ref={ref}>
      <input
        type="text"
        value={state || INITIAL_DATE_STR}
        onClick={() => setIsOpen(true)}
        className={styles.input}
      />
      {isOpen && (
        <Calendar
          className={styles.calendar}
          minDate={INITIAL_DATE}
          onChange={value => handleClick(value)}
        />
      )}
    </div>
  );
};

export default CustomCalendar;
