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
            <>
              <div className={styles.icon} key={tab.id}>
                <TabIcon />
              </div>
              <DividerIcon id={styles.divider} key={tab.id} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;
