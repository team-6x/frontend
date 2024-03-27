import styles from './styles.module.scss';
import InputTitle from '../InputTitle';
import { Input, Tooltip, Gap, Label, Text } from '../../../ui-kit';
import { SALARY } from '../../../utils/constans';
import { useActions } from '../../../hooks/actions';
import { useState } from 'react';
import { useAppSelector } from '../../../hooks/redux';

function Salary() {
  const { setThirdResult } = useActions();
  const [label, setLabel] = useState(false);

  const thirdResult = useAppSelector(state => state.results.thirdResult);

  return (
    <>
      <InputTitle>{SALARY.inputTitle}</InputTitle>
      <Gap height={12} />
      <div className={styles.container}>
        <Input
          placeholder={SALARY.inputPlaceholder}
          inputName="compensation"
          handleStoreChange={setThirdResult}
          initialValue={thirdResult.compensation}
        />
        <Tooltip>{SALARY.tooltip}</Tooltip>
      </div>
      <Gap height={32} />
      <Label
        text={SALARY.label}
        variant={label ? 'success' : 'info'}
        onClick={() => setLabel(prev => !prev)}
      />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {SALARY.labelDescription}
      </Text>
      {label && (
        <>
          <Gap height={16} />
          <Text weight="bold" color="grey80">
            {SALARY.inputTitle2}
          </Text>
          <Gap height={12} />
          <div className={styles.container}>
            <Input
              placeholder={SALARY.inputPlaceholder2}
              inputName="costForSpeed"
              handleStoreChange={setThirdResult}
              initialValue={thirdResult.costForSpeed}
            />
            <Tooltip>{SALARY.tooltip2}</Tooltip>
          </div>
        </>
      )}
    </>
  );
}

export default Salary;
