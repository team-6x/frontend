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
import { useState } from 'react';

export default function BuilderPage() {
  const results = useAppSelector(state => state.results);
  const [firstTab, setFirstTab] = useState(VACANCY_TABS[0].id);
  const [secondTab, setSecondTab] = useState(RECRUITER_TABS[0].id);
  const [paymentSelected, setPaymentSelected] = useState(false);
  const firstTabHandler = (tab: number) => setFirstTab(tab);
  const secondTabHandler = (tab: number) => setSecondTab(tab);

  return (
    <div className={styles.pageContainer}>
      <Section
        title="Создание вакансии"
        tabsConfig={VACANCY_TABS}
        tabState={firstTab}
        tabHandler={firstTabHandler}
        id="firstStep"
      >
        <div className={styles.cardContainer}>
          <RequestCard tabState={firstTab} tabHandler={firstTabHandler} />
          <ResultCard results={results.firstResult} />
        </div>
      </Section>
      <Gap height={80} />
      {firstTab === 5 && (
        <Section
          id="secondStep"
          title="Условия компенсации"
          subtitle="Выберите тариф оплаты работы рекрутера"
        >
          <PaymentMethod setState={setPaymentSelected} />
        </Section>
      )}
      {paymentSelected && (
        <>
          <Section
            title="Условия сотрудничества"
            tabsConfig={RECRUITER_TABS}
            tabState={secondTab}
            tabHandler={secondTabHandler}
            id="thirdStep"
          >
            <div className={styles.cardContainer}>
              <RequestCard tabState={secondTab} tabHandler={secondTabHandler} />
              <ResultCard results={results.thirdResult} />
            </div>
          </Section>
          <Offer />
        </>
      )}
    </div>
  );
}
