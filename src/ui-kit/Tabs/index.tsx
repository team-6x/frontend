import styles from './styles.module.scss';
import { Text, TabIcon } from '..';
import { DividerIcon } from '../../assets/icons';

interface ITabs {
  config: {
    title: string;
    id: number;
  }[];
  tabState: number;
  tabHandler: (id: number) => void;
}

const Tabs: React.FC<ITabs> = ({ config, tabState, tabHandler }) => {
  return (
    <div className={styles.tabs}>
      <ul className={styles.tabs__body}>
        {config.map(tab => {
          const isActive = tabState === tab.id;
          return (
            <li
              className={`${styles.tab} ${isActive ? styles.tab_active : ''}`}
              onClick={() => tabHandler(tab.id)}
              key={tab.id}
            >
              <Text color="grey60" weight="bold">
                {tab.title}
              </Text>
            </li>
          );
        })}
      </ul>
      <div className={styles.tabs_bottom}>
        {config.map(tab => {
          return (
            <div
              key={tab.id}
              className={styles.tab_bottom}
              style={{ width: `calc((100% - 24px) / ${config.length - 1})` }}
            >
              <div className={styles.icon}>
                <TabIcon />
              </div>
              <DividerIcon id={styles.divider} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
