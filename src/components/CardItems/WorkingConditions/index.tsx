import styles from './styles.module.scss';
import InputTitle from '../InputTitle';
import {
  Gap,
  Input,
  Checkbox,
  Select,
  MultiSelect,
  Label,
  Text,
} from '../../../ui-kit';
import { WORKING_CONDITIONS } from '../../../utils/constans';
import { useState } from 'react';
import { useActions } from '../../../hooks/actions';

const options = [{ name: 'Сфера деятельности', id: 1 }];

function WorkingConditions() {
  const [label, setLabel] = useState(false);
  const [label2, setLabel2] = useState(false);

  const { setFirstResult } = useActions();
  return (
    <>
      <InputTitle>{WORKING_CONDITIONS.inputTitle}</InputTitle>
      <Gap height={12} />
      <div className={styles.container}>
        <Input
          placeholder={WORKING_CONDITIONS.inputPlaceholder}
          inputName="salaryMin"
          handleStoreChange={setFirstResult}
        />
        <Input
          placeholder={WORKING_CONDITIONS.inputPlaceholder2}
          inputName="salaryMax"
          handleStoreChange={setFirstResult}
        />
      </div>
      <Gap height={12} />
      <Checkbox label={WORKING_CONDITIONS.checkbox} />
      <Gap height={16} />
      <Select
        options={options}
        label={<InputTitle>{WORKING_CONDITIONS.selectTitle}</InputTitle>}
        placeholder={WORKING_CONDITIONS.selectPlaceholder}
        inputName="format"
        handleStoreChange={setFirstResult}
      />
      <Gap height={16} />
      <MultiSelect
        label={<InputTitle>{WORKING_CONDITIONS.multiTitle}</InputTitle>}
        placeholder={WORKING_CONDITIONS.multiPlaceholder}
        options={options}
        inputName="workFormal"
        handleStoreChange={setFirstResult}
      />
      <Gap height={32} />
      <div className={styles.box}>
        <Label
          text={WORKING_CONDITIONS.label}
          variant="success"
          onClick={() => setLabel(prev => !prev)}
        />
        <Label
          text={WORKING_CONDITIONS.label2}
          variant="success"
          onClick={() => setLabel2(prev => !prev)}
        />
      </div>
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {WORKING_CONDITIONS.labelDescription}
      </Text>
      <Gap height={12} />
      <Input
        icon
        placeholder={WORKING_CONDITIONS.additional}
        inputName="additionalWorkConditions"
        handleStoreChange={setFirstResult}
      />
      {label && (
        <>
          <Gap height={16} />
          <Select
            options={options}
            label={WORKING_CONDITIONS.selectTitle2}
            placeholder={WORKING_CONDITIONS.selectPlaceholder2}
            inputName="medical"
            handleStoreChange={setFirstResult}
          />
        </>
      )}
      {label2 && (
        <>
          <Gap height={16} />
          <MultiSelect
            label={WORKING_CONDITIONS.multiTitle2}
            placeholder={WORKING_CONDITIONS.multiPlaceholder2}
            options={options}
            inputName="bonuses"
            handleStoreChange={setFirstResult}
          />
        </>
      )}
    </>
  );
}

export default WorkingConditions;
