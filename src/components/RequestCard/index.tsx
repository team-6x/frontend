import { Card, Button } from '../../ui-kit';
import styles from './styles.module.scss';
import { EmployeeRequirement } from '../CardItems';

export default function RequestCard() {
  return (
    <div className={styles.requestCardContainer}>
      <Card highlight>
        <EmployeeRequirement />
      </Card>
      <div className={styles.box}>
        <Button view="flat" variant="secondary">
          Отменить
        </Button>
        <Button view="filled" variant="secondary">
          Продолжить
        </Button>
      </div>
    </div>
  );
}
