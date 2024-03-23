import styles from './styles.module.scss';
import {
  ResultCard,
  Section,
  RequestCard,
  PaymentMethod,
  Offer,
} from '../../components';
import { Gap } from '../../ui-kit';
import { VACANCY_TABS, RECRUITER_TABS } from '../../utils/constans';
import { useAppSelector } from '../../hooks/redux';

export default function BuilderPage() {
  const results = useAppSelector(state => state.results);

  return (
    <div className={styles.pageContainer}>
      <Section title="Создание вакансии" tabsConfig={VACANCY_TABS}>
        <div className={styles.cardContainer}>
          <RequestCard />
          <ResultCard results={results.firstResult} />
        </div>
      </Section>
      <Gap height={80} />
      <PaymentMethod />
      <Gap height={40} />
      <Section title="Условия сотрудничества" tabsConfig={RECRUITER_TABS}>
        <div className={styles.cardContainer}>
          <RequestCard />
          <ResultCard results={results.thirdResult} />
        </div>
      </Section>
      <Offer />
    </div>
  );
}
