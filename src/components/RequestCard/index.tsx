import { Card } from '../../ui-kit';
import styles from './styles.module.scss';
export default function RequestCard() {
  return (
    <div className={styles.requestCardContainer}>
      <Card highlight />
    </div>
  );
}
