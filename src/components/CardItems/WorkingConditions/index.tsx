import styles from './styles.module.scss';
import {
  Gap,
  Input,
  TextArea,
  Checkbox,
  Select,
  MultiSelect,
  Label,
  Text,
  TextWithAsterisk,
} from '../../../ui-kit';
import {
  WORKING_CONDITIONS,
  FORMAT_OPTIONS,
  WORK_FORMAT_OPTIONS,
  MEDICAL_OPTIONS,
  BONUSES_OPTIONS,
} from '../../../utils/constans';
import { useActions, useAppSelector } from '../../../hooks/useActions';
import { useState } from 'react';

function WorkingConditions() {
  const {
    salaryMin,
    salaryMax,
    format,
    workFormat,
    additionalWorkConditions,
    additionalWorkConditionsResult,
    medical,
    bonuses,
  } = useAppSelector(state => state.inputsForm.firstStep);
  const {
    setMinSalary,
    setMaxSalary,
    setFormat,
    setWorkFormat,
    setAdditionalWorkConditions,
    setAdditionalWorkConditionsResult,
    setMedical,
    setBonuses,
  } = useActions();
  const [labels, setLabels] = useState({
    medical: false,
    bonuses: false,
  });

  return (
    <>
      <TextWithAsterisk children={WORKING_CONDITIONS.inputTitle} />
      <Gap height={12} />
      <div className={styles.container}>
        <Input
          placeholder={WORKING_CONDITIONS.inputPlaceholder}
          state={salaryMin}
          setState={setMinSalary}
        />
        <Input
          placeholder={WORKING_CONDITIONS.inputPlaceholder2}
          state={salaryMax}
          setState={setMaxSalary}
        />
      </div>
      <Gap height={12} />
      <Checkbox label={WORKING_CONDITIONS.checkbox} />
      <Gap height={16} />
      <Select
        options={FORMAT_OPTIONS}
        label={<TextWithAsterisk children={WORKING_CONDITIONS.selectTitle} />}
        placeholder={WORKING_CONDITIONS.selectPlaceholder}
        state={format}
        setState={setFormat}
      />
      <Gap height={16} />
      <MultiSelect
        label={<TextWithAsterisk children={WORKING_CONDITIONS.multiTitle} />}
        placeholder={WORKING_CONDITIONS.multiPlaceholder}
        options={WORK_FORMAT_OPTIONS}
        state={workFormat}
        setState={setWorkFormat}
      />
      <Gap height={32} />
      <div className={styles.box}>
        <Label
          text={WORKING_CONDITIONS.label}
          variant={labels.medical ? 'success' : 'info'}
          onClick={() => setLabels({ ...labels, medical: !labels.medical })}
        />
        <Label
          text={WORKING_CONDITIONS.label2}
          variant={labels.bonuses ? 'success' : 'info'}
          onClick={() => setLabels({ ...labels, bonuses: !labels.bonuses })}
        />
      </div>
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {WORKING_CONDITIONS.labelDescription}
      </Text>
      <Gap height={12} />
      <TextArea
        placeholder={WORKING_CONDITIONS.additional}
        inputState={additionalWorkConditions}
        setInputState={setAdditionalWorkConditions}
        chipsState={additionalWorkConditionsResult}
        setChipsState={setAdditionalWorkConditionsResult}
      />
      {labels.medical && (
        <>
          <Gap height={16} />
          <Select
            options={MEDICAL_OPTIONS}
            label={WORKING_CONDITIONS.selectTitle2}
            placeholder={WORKING_CONDITIONS.selectPlaceholder2}
            state={medical}
            setState={setMedical}
          />
        </>
      )}
      {labels.bonuses && (
        <>
          <Gap height={16} />
          <MultiSelect
            label={WORKING_CONDITIONS.multiTitle2}
            placeholder={WORKING_CONDITIONS.multiPlaceholder2}
            options={BONUSES_OPTIONS}
            state={bonuses}
            setState={setBonuses}
          />
        </>
      )}
    </>
  );
}

export default WorkingConditions;
