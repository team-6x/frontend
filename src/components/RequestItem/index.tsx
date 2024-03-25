import { Card, Button } from '../../ui-kit';
import styles from './styles.module.scss';

interface RequestItemProps {
  tabContent: React.ReactNode[];
  tabState: number;
  tabHandler: (id: number) => void;
  setOpenSecondStep?: () => void;
}

export default function RequestItem({
  tabContent,
  tabState,
  tabHandler,
  setOpenSecondStep,
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
            if (tabState < tabContent.length - 1) tabHandler(tabState + 1);
            else {
              setOpenSecondStep?.();
            }
          }}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
}
