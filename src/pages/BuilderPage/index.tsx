import styles from './styles.module.scss';
import {
  ResultCard,
  Section,
  FirstStepTabsContent,
  ThirdStepTabsContent,
  PaymentMethod,
  Offer,
} from '../../components';
import { Gap } from '../../ui-kit';
import { VACANCY_TABS, RECRUITER_TABS } from '../../utils/constans';
import { useAppSelector } from '../../hooks/redux';
import { useState, useRef } from 'react';

export default function BuilderPage() {
  const results = useAppSelector(state => state.results);
  const [firstTab, setFirstTab] = useState(0);
  const [secondTab, setSecondTab] = useState(0);
  const [openSecondStep, setOpenSecondStep] = useState(false);
  const [openThirdStep, setOpenThirdStep] = useState(false);
  const firstTabHandler = (tab: number) => setFirstTab(tab);
  const secondTabHandler = (tab: number) => setSecondTab(tab);
  const firstStepRef = useRef<HTMLDivElement>(null);
  const secondStepRef = useRef<HTMLDivElement>(null);
  const scrollToNextStep = (ref: React.RefObject<HTMLDivElement>) =>
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth' }), 0);
  const nextStepHandleClick = (
    ref: React.RefObject<HTMLDivElement>,
    setState: (state: boolean) => void,
  ) => {
    setState(true);
    scrollToNextStep(ref);
  };

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
          <FirstStepTabsContent
            tabState={firstTab}
            tabHandler={firstTabHandler}
            nextStepHandleClick={() =>
              nextStepHandleClick(firstStepRef, setOpenSecondStep)
            }
          />
          <ResultCard results={results.firstResult} />
        </div>
      </Section>
      <Gap height={40} />
      {openSecondStep && (
        <div ref={firstStepRef}>
          <Section
            id="secondStep"
            title="Условия компенсации"
            subtitle="Выберите тариф оплаты работы рекрутера"
          >
            <PaymentMethod
              nextStepHandleClick={() =>
                nextStepHandleClick(secondStepRef, setOpenThirdStep)
              }
            />
          </Section>
          <Gap height={40} />
        </div>
      )}
      {openThirdStep && (
        <div ref={secondStepRef}>
          <Section
            title="Условия сотрудничества"
            tabsConfig={RECRUITER_TABS}
            tabState={secondTab}
            tabHandler={secondTabHandler}
            id="thirdStep"
          >
            <div className={styles.cardContainer}>
              <ThirdStepTabsContent
                tabState={secondTab}
                tabHandler={secondTabHandler}
              />
              <ResultCard results={results.thirdResult} />
            </div>
          </Section>
          <Offer />
        </div>
      )}
    </div>
  );
}
