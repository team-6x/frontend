import { Card, Button } from '../../ui-kit';
import styles from './styles.module.scss';

interface RequestItemProps {
  tabContent: React.ReactNode[];
  tabState: number;
  tabHandler: (id: number) => void;
  nextStepHandleClick?: () => void;
}

export default function RequestItem({
  tabContent,
  tabState,
  tabHandler,
  nextStepHandleClick,
}: RequestItemProps) {
  return (
    <div className={styles.requestCardContainer}>
      <Card highlight>{tabContent[tabState]}</Card>
      <div className={styles.box}>
        {/* <Button view="flat" variant="secondary">
          Назад
        </Button> */}
        <Button
          view="filled"
          variant="secondary"
          onClick={() => {
            if (tabState < tabContent.length - 1) tabHandler(tabState + 1);
            else nextStepHandleClick?.();
          }}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
}
