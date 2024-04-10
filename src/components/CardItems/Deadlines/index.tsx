import styles from './styles.module.scss';
import {
  Gap,
  Label,
  Text,
  CustomCalendar,
  Tooltip,
  TextWithAsterisk,
} from '../../../ui-kit';
import { DEADLINES } from '../../../utils/constans';
import { useAppSelector, useActions } from '../../../hooks/useActions';

const Deadlines: React.FC = () => {
  const { inputsForm, labels } = useAppSelector(state => state);
  const actions = useActions();

  return (
    <>
      <TextWithAsterisk children={DEADLINES.inputTitle} />
      <Gap height={12} />
      <div className={styles.container}>
        <CustomCalendar
          state={inputsForm.thirdStep.dateForWork}
          setState={actions.setDateForWork}
        />
        <Tooltip>{DEADLINES.tooltip}</Tooltip>
      </div>
      <Gap height={32} />
      <Label
        text={DEADLINES.label}
        variant={labels.calendar ? 'success' : 'info'}
        onClick={actions.setCalendarLabel}
      />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {DEADLINES.labelDescription}
      </Text>
      {labels.calendar && (
        <>
          <Gap height={16} />
          <Text weight="bold" color="grey80">
            {DEADLINES.inputTitle2}
          </Text>
          <Gap height={12} />
          <CustomCalendar
            state={inputsForm.thirdStep.dateForFirstResume}
            setState={actions.setDateForFirstResume}
          />
        </>
      )}
    </>
  );
};

export default Deadlines;
