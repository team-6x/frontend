import { Card, Button } from '../../ui-kit';
import styles from './styles.module.scss';

interface RequestItemProps {
  children?: React.ReactNode;
  tabState: number;
  tabHandler: (id: number) => void;
}

export default function RequestItem({
  children,
  tabState,
  tabHandler,
}: RequestItemProps) {
  return (
    <div className={styles.requestCardContainer}>
      <Card highlight>{children}</Card>
      <div className={styles.box}>
        <Button view="flat" variant="secondary">
          Отменить
        </Button>
        <Button
          view="filled"
          variant="secondary"
          onClick={() => tabHandler(tabState + 1)}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
}
