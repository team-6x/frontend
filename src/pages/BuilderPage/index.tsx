import ResultCard from '../../components/ResultCard';
import Section from '../../components/Section';
import { VACANCY_TABS, RECRUITER_TABS } from '../../utils/constans';
import styles from './styles.module.scss';
import RequestCard from '../../components/RequestCard/index';
import { useAppSelector } from '../../hooks/redux';
import PaymentMethod from '../../components/PaymentMethod';

export default function BuilderPage() {
  const results = useAppSelector(state => state.results);

  return (
    <div className={styles.pageContainer}>
      <Section title="Создание вакансии" tabsConfig={VACANCY_TABS}>
        <div className={styles.cardContainer}>
          <RequestCard />
          <ResultCard results={results.firstStep} />
        </div>
      </Section>
      <PaymentMethod />
      <Section title="Условия сотрудничества" tabsConfig={RECRUITER_TABS}>
        <div className={styles.cardContainer}>
          <RequestCard />
          <ResultCard results={results.thirdStep} />
        </div>
      </Section>
    </div>
  );
}
