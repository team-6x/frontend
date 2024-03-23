import { Card, Button } from '../../ui-kit';
import styles from './styles.module.scss';

interface RequestItemProps {
  children?: React.ReactNode;
}

export default function RequestItem({ children }: RequestItemProps) {
  return (
    <div className={styles.requestCardContainer}>
      <Card highlight>{children}</Card>
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
