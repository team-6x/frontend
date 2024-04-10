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
import { useActions, useAppSelector } from '../../hooks/useActions';
import useNextStep from '../../hooks/useNextStep';

export default function BuilderPage() {
  const { firstStep, thirdStep } = useAppSelector(state => state.inputsForm);
  const { firstTabsGroup, secondTabsGroup } = useAppSelector(
    state => state.tabs,
  );
  const { setFirstTabsGroup, setSecondTabsGroup } = useActions();
  const {
    openSecondStep,
    openThirdStep,
    secondStepRef,
    thirdStepRef,
    showSecondStep,
    showThirdStep,
  } = useNextStep();

  return (
    <div className={styles.pageContainer}>
      <Section
        title="Создание вакансии"
        tabsConfig={VACANCY_TABS}
        tabState={firstTabsGroup}
        tabHandler={setFirstTabsGroup}
        id="firstStep"
      >
        <div className={styles.cardContainer}>
          <FirstStepTabsContent
            tabState={firstTabsGroup}
            tabHandler={setFirstTabsGroup}
            nextStepHandleClick={showSecondStep}
          />
          <ResultCard
            results={Object.entries(firstStep)}
            title="Информация о вакансии"
          />
        </div>
      </Section>
      <Gap height={40} />
      {openSecondStep && (
        <>
          <Section
            id="secondStep"
            ref={secondStepRef}
            title="Условия компенсации"
            subtitle="Выберите тариф оплаты работы рекрутера"
          >
            <PaymentMethod nextStepHandleClick={showThirdStep} />
          </Section>
          <Gap height={40} />
        </>
      )}
      {openThirdStep && (
        <>
          <Section
            title="Условия сотрудничества"
            tabsConfig={RECRUITER_TABS}
            tabState={secondTabsGroup}
            tabHandler={setSecondTabsGroup}
            id="thirdStep"
            ref={thirdStepRef}
          >
            <div className={styles.cardContainer}>
              <ThirdStepTabsContent
                tabState={secondTabsGroup}
                tabHandler={setSecondTabsGroup}
              />
              <ResultCard
                results={Object.entries(thirdStep)}
                title="Информация о рекрутере"
              />
            </div>
          </Section>
          <Offer />
        </>
      )}
    </div>
  );
}
