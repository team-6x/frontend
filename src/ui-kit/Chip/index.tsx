import React from 'react';
import styles from './styles.module.scss';

interface ChipProps {
  label: string;
  onDelete?: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, onDelete }) => {
  return (
    <div className={styles.chip}>
      <div className={styles.chip__container}>
        <span className={styles.chip__label}>{label}</span>

        <button className={styles.chip__button} onClick={onDelete}></button>
      </div>
    </div>
  );
};

export default Chip;
