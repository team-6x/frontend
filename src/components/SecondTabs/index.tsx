import { Tabs } from '../../ui-kit';

const tabsConfig = [
  { title: 'Описание вакансии', value: 'content for tab 1' },
  { title: 'Обязанности сотрудника', value: 'content for tab 2' },
  { title: 'Требования к соискателю', value: 'content for tab 3' },
  { title: 'Условия работы', value: 'content for tab 4' },
];

function SecondTabs() {
  return <Tabs config={tabsConfig} />;
}

export default SecondTabs;
