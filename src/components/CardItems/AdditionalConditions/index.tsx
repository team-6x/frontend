import styles from './styles.module.scss';
import {
  Gap,
  Label,
  Text,
  TextArea,
  MultiSelect,
  Select,
} from '../../../ui-kit';
import { FileUpload } from '../..';
import {
  ADDITIONAL_CONDITIONS,
  ADDITIONAL_RECRUITER_INFO_OPTIONS,
  SECURITY_OPTIONS,
} from '../../../utils/constans';
import { useActions, useAppSelector } from '../../../hooks/useActions';
import { useState } from 'react';

function AdditionalConditions() {
  const thirdStep = useAppSelector(state => state.inputsForm.thirdStep);
  const {
    setAdditionalRecruiterConditions,
    setAdditionalRecruiterConditionsResult,
    setAdditionalRecruiterOtherInfo,
    setSecurity,
    setSecurityResult,
  } = useActions();

  const [label, setLabel] = useState(false);
  const [label2, setLabel2] = useState(false);

  return (
    <>
      <div className={styles.box}>
        <Label
          text={ADDITIONAL_CONDITIONS.label}
          variant={label ? 'success' : 'info'}
          onClick={() => setLabel(prev => !prev)}
        />
        <Label
          text={ADDITIONAL_CONDITIONS.label2}
          variant={label2 ? 'success' : 'info'}
          onClick={() => setLabel2(prev => !prev)}
        />
      </div>
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {ADDITIONAL_CONDITIONS.labelDescription}
      </Text>
      <Gap height={12} />
      <TextArea
        placeholder={ADDITIONAL_CONDITIONS.additional}
        inputState={thirdStep.additionalRecruiterConditions}
        setInputState={setAdditionalRecruiterConditions}
        chipsState={thirdStep.additionalRecruiterConditionsResult}
        setChipsState={setAdditionalRecruiterConditionsResult}
      />
      {label && (
        <>
          <Gap height={32} />
          <MultiSelect
            options={ADDITIONAL_RECRUITER_INFO_OPTIONS}
            label={ADDITIONAL_CONDITIONS.multiTitle}
            placeholder={ADDITIONAL_CONDITIONS.multiPlaceholder}
            state={thirdStep.additionalRecruiterOtherInfo}
            setState={setAdditionalRecruiterOtherInfo}
          />
        </>
      )}
      {label2 && (
        <>
          <Gap height={32} />
          <Select
            options={SECURITY_OPTIONS}
            label={ADDITIONAL_CONDITIONS.selectTitle}
            placeholder={ADDITIONAL_CONDITIONS.selectPlaceholder}
            state={thirdStep.security}
            setState={setSecurity}
          />
        </>
      )}
      {thirdStep.security === 'Да' && (
        <>
          <Gap height={16} />
          <FileUpload
            state={thirdStep.securityResult}
            setState={setSecurityResult}
          />
        </>
      )}
    </>
  );
}

export default AdditionalConditions;
