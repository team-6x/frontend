import InputTitle from '../../../ui-kit/TextWithAsterisk';
import { Gap, Label, Text, CustomCalendar, Tooltip } from '../../../ui-kit';
import { DEADLINES } from '../../../utils/constans';
import { useState } from 'react';
import { useAppSelector, useActions } from '../../../hooks/useActions';
import styles from './styles.module.scss';

function Deadlines() {
  const [showCalendar, setShowCalendar] = useState(false);
  const { thirdStep } = useAppSelector(state => state.inputsForm);
  const { setDateForWork, setDateForFirstResume } = useActions();

  return (
    <>
      <InputTitle>{DEADLINES.inputTitle}</InputTitle>
      <Gap height={12} />
      <div className={styles.container}>
        <CustomCalendar
          state={thirdStep.dateForWork}
          setState={setDateForWork}
        />
        <Tooltip>{DEADLINES.tooltip}</Tooltip>
      </div>
      <Gap height={32} />
      <Label
        text={DEADLINES.label}
        variant={showCalendar ? 'success' : 'info'}
        onClick={() => setShowCalendar(!showCalendar)}
      />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {DEADLINES.labelDescription}
      </Text>
      {showCalendar && (
        <>
          <Gap height={16} />
          <Text weight="bold" color="grey80">
            {DEADLINES.inputTitle2}
          </Text>
          <Gap height={12} />
          <CustomCalendar
            state={thirdStep.dateForFirstResume}
            setState={setDateForFirstResume}
          />
        </>
      )}
    </>
  );
}

export default Deadlines;
