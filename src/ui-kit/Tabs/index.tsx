import styles from './styles.module.scss';
import { Text, TabIcon } from '..';
import { useState } from 'react';
import { DividerIcon } from '../../assets/icons';

interface TabsProps {
  config: {
    title: string;
    value: string;
  }[];
}

function Tabs({ config }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <ul className={styles.tabs}>
        {config.map((tab, index) => {
          const isActive = activeTab === index;
          return (
            <li
              className={`${styles.tab} ${isActive ? styles.tab_active : ''}`}
              onClick={() => setActiveTab(index)}
              key={index}
            >
              <Text color="grey60" weight="bold">
                {tab.title}
              </Text>
            </li>
          );
        })}
      </ul>
      <div className={styles.tabs_bottom}>
        {config.map((_, index) => {
          return (
            <>
              <TabIcon style={{ width: '24px', height: '24px' }} key={index} />
              <DividerIcon id={styles.divider} key={index} />
            </>
          );
        })}
      </div>
      <div className={styles.content}>{config[activeTab].value}</div>
    </div>
  );
}

export default Tabs;
