import { Card, Button } from '../../ui-kit';
import styles from './styles.module.scss';

interface RequestItemProps {
  tabContent: React.ReactNode[];
  tabState: number;
  tabHandler: (id: number) => void;
}

export default function RequestItem({
  tabContent,
  tabState,
  tabHandler,
}: RequestItemProps) {
  return (
    <div className={styles.requestCardContainer}>
      <Card highlight>{tabContent[tabState]}</Card>
      <div className={styles.box}>
        <Button view="flat" variant="secondary">
          Назад
        </Button>
        <Button
          view="filled"
          variant="secondary"
          onClick={() => {
            if (tabState <= tabContent.length - 2) tabHandler(tabState + 1);
          }}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
}
