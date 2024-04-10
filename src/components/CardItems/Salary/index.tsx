import styles from './styles.module.scss';
import TextWithAsterisk from '../../../ui-kit/TextWithAsterisk';
import { Input, Tooltip, Gap, Label, Text } from '../../../ui-kit';
import { SALARY } from '../../../utils/constans';
import { useAppSelector, useActions } from '../../../hooks/useActions';
import { useState } from 'react';

function Salary() {
  const [showInput, setShowInput] = useState(false);
  const thirdResult = useAppSelector(state => state.inputsForm.thirdStep);
  const { setCompensation, setCostForSpeed } = useActions();

  return (
    <>
      <TextWithAsterisk children={SALARY.inputTitle} />
      <Gap height={12} />
      <div className={styles.container}>
        <Input
          placeholder={SALARY.inputPlaceholder}
          state={thirdResult.compensation}
          setState={setCompensation}
        />
        <Tooltip>{SALARY.tooltip}</Tooltip>
      </div>
      <Gap height={32} />
      <Label
        text={SALARY.label}
        variant={showInput ? 'success' : 'info'}
        onClick={() => setShowInput(!showInput)}
      />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {SALARY.labelDescription}
      </Text>
      {showInput && (
        <>
          <Gap height={16} />
          <Text weight="bold" color="grey80">
            {SALARY.inputTitle2}
          </Text>
          <Gap height={12} />
          <div className={styles.container}>
            <Input
              placeholder={SALARY.inputPlaceholder2}
              state={thirdResult.costForSpeed}
              setState={setCostForSpeed}
            />
            <Tooltip>{SALARY.tooltip2}</Tooltip>
          </div>
        </>
      )}
    </>
  );
}

export default Salary;
