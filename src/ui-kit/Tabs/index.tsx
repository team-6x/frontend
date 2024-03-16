import styles from './styles.module.scss';
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
      {testTabs.map(tab => (
        <div
          className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
          onClick={() => changeTab(tab)}
          key={tab}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
