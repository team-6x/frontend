import styles from './styles.module.scss';
import { Text } from '..';
import { useState } from 'react';

const testTabs = [
  'Описание вакансии',
  'Обязанности сотрудника',
  'Требования к соискателю',
  'Условия работы',
  'Дополнительные данные',
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(testTabs[0]);
  const changeTab = (tab: string) => setActiveTab(tab);

  return (
    <div className={styles.tabs}>
      {testTabs.map((tab, index) => {
        const isActive = activeTab === tab;
        return (
          <div
            className={`${styles.tab} ${isActive ? styles.tab_active : ''}`}
            onClick={() => changeTab(tab)}
            key={index}
          >
            <Text color={isActive ? 'white' : 'grey80'}>{tab}</Text>
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;
