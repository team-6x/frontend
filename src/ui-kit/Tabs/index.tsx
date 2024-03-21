import styles from './styles.module.scss';
import { Text, TabIcon } from '..';
import { useState } from 'react';
import { DividerIcon } from '../../assets/icons';

interface TabsProps {
  config: {
    title: string;
    id: number;
  }[];
}

function Tabs({ config }: TabsProps) {
  const [activeTab, setActiveTab] = useState(config[0].id);

  return (
    <div className={styles.tabs}>
      <ul className={styles.tabs__body}>
        {config.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <li
              className={`${styles.tab} ${isActive ? styles.tab_active : ''}`}
              onClick={() => setActiveTab(tab.id)}
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
}

export default Tabs;
