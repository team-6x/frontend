import styles from './styles.module.scss';
import { TextArea, Text, Gap, Label, Select, Tooltip } from '../../../ui-kit';
import { FileUpload } from '../../';
import {
  ADDITIONAL_INFORMATION,
  LOCATION_OPTIONS,
  TEST_TASK_OPTIONS,
} from '../../../utils/constans';
import { useState } from 'react';
import { useActions, useAppSelector } from '../../../hooks/useActions';

function AdditionalInformation() {
  const {
    additionalInfo2,
    additionalInfo2Result,
    location,
    banned,
    bannedResult,
    test,
    testResult,
  } = useAppSelector(state => state.inputsForm.firstStep);
  const {
    setAdditionalInfo2,
    setAdditionalInfo2Result,
    setLocation,
    setBanned,
    setBannedResult,
    setTest,
    setTestResult,
  } = useActions();
  const [labels, setLabels] = useState({
    location: false,
    banned: false,
    testTask: false,
  });

  return (
    <>
      <div className={styles.box}>
        <Label
          text={ADDITIONAL_INFORMATION.label}
          variant={labels.location ? 'success' : 'info'}
          onClick={() => setLabels({ ...labels, location: !labels.location })}
        />
        <Label
          text={ADDITIONAL_INFORMATION.label2}
          variant={labels.banned ? 'success' : 'info'}
          onClick={() => setLabels({ ...labels, banned: !labels.banned })}
        />
        <Label
          text={ADDITIONAL_INFORMATION.label3}
          variant={labels.testTask ? 'success' : 'info'}
          onClick={() => setLabels({ ...labels, testTask: !labels.testTask })}
        />
      </div>
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {ADDITIONAL_INFORMATION.labelDescription}
      </Text>
      <Gap height={12} />
      <TextArea
        placeholder={ADDITIONAL_INFORMATION.additional}
        inputState={additionalInfo2}
        setInputState={setAdditionalInfo2}
        chipsState={additionalInfo2Result}
        setChipsState={setAdditionalInfo2Result}
      />
      {labels.location && (
        <>
          <Gap height={32} />
          <Select
            options={LOCATION_OPTIONS}
            label={ADDITIONAL_INFORMATION.selectTitle}
            placeholder={ADDITIONAL_INFORMATION.selectPlaceholder}
            state={location}
            setState={setLocation}
          />
        </>
      )}
      {labels.banned && (
        <>
          <Gap height={16} />
          <Text weight="bold" color="grey80">
            {ADDITIONAL_INFORMATION.inputTitle}
          </Text>
          <Gap height={12} />
          <div className={styles.container}>
            <TextArea
              placeholder={ADDITIONAL_INFORMATION.inputPlaceholder}
              inputState={banned}
              setInputState={setBanned}
              chipsState={bannedResult}
              setChipsState={setBannedResult}
            />
            <Tooltip>{ADDITIONAL_INFORMATION.tooltip}</Tooltip>
          </div>
        </>
      )}
      {labels.testTask && (
        <>
          <Gap height={16} />
          <Select
            options={TEST_TASK_OPTIONS}
            label={ADDITIONAL_INFORMATION.selectTitle2}
            placeholder={ADDITIONAL_INFORMATION.selectPlaceholder2}
            state={test}
            setState={setTest}
          />
        </>
      )}
      {test === 'Да' && (
        <>
          <Gap height={16} />
          <FileUpload state={testResult} setState={setTestResult} />
        </>
      )}
    </>
  );
}

export default AdditionalInformation;
