import styles from './styles.module.scss';
import {
  TextArea,
  Text,
  Gap,
  Label,
  Select,
  Tooltip,
  FileUpload,
} from '../../../ui-kit';
import {
  ADDITIONAL_INFORMATION,
  LOCATION_OPTIONS,
  TEST_TASK_OPTIONS,
} from '../../../utils/constans';
import { useActions, useAppSelector } from '../../../hooks/useActions';

const AdditionalInformation: React.FC = () => {
  const { inputsForm, labels } = useAppSelector(state => state);
  const actions = useActions();

  return (
    <>
      <div className={styles.box}>
        <Label
          text={ADDITIONAL_INFORMATION.label}
          variant={labels.location ? 'success' : 'info'}
          onClick={actions.setLocationLabel}
        />
        <Label
          text={ADDITIONAL_INFORMATION.label2}
          variant={labels.banned ? 'success' : 'info'}
          onClick={actions.setBannedLabel}
        />
        <Label
          text={ADDITIONAL_INFORMATION.label3}
          variant={labels.testTask ? 'success' : 'info'}
          onClick={actions.setTestLabel}
        />
      </div>
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {ADDITIONAL_INFORMATION.labelDescription}
      </Text>
      <Gap height={12} />
      <TextArea
        placeholder={ADDITIONAL_INFORMATION.additional}
        inputState={inputsForm.firstStep.additionalInfo2}
        setInputState={actions.setAdditionalInfo2}
        chipsState={inputsForm.firstStep.additionalInfo2Result}
        setChipsState={actions.setAdditionalInfo2Result}
      />
      {labels.location && (
        <>
          <Gap height={32} />
          <Select
            options={LOCATION_OPTIONS}
            label={ADDITIONAL_INFORMATION.selectTitle}
            placeholder={ADDITIONAL_INFORMATION.selectPlaceholder}
            state={inputsForm.firstStep.location}
            setState={actions.setLocation}
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
              inputState={inputsForm.firstStep.banned}
              setInputState={actions.setBanned}
              chipsState={inputsForm.firstStep.bannedResult}
              setChipsState={actions.setBannedResult}
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
            state={inputsForm.firstStep.test}
            setState={actions.setTest}
          />
        </>
      )}
      {inputsForm.firstStep.test === 'Да' && (
        <>
          <Gap height={16} />
          <FileUpload
            state={inputsForm.firstStep.testResult}
            setState={actions.setTestResult}
          />
        </>
      )}
    </>
  );
};

export default AdditionalInformation;
