import styles from './styles.module.scss';
import {
  Gap,
  Label,
  Text,
  TextArea,
  MultiSelect,
  Select,
  FileUpload,
} from '../../../ui-kit';
import {
  ADDITIONAL_CONDITIONS,
  ADDITIONAL_RECRUITER_INFO_OPTIONS,
  SECURITY_OPTIONS,
} from '../../../utils/constans';
import { useActions, useAppSelector } from '../../../hooks/useActions';

const AdditionalConditions: React.FC = () => {
  const { thirdStep } = useAppSelector(state => state.inputsForm);
  const { additional, fileUpload } = useAppSelector(state => state.labels);
  const actions = useActions();

  return (
    <>
      <div className={styles.box}>
        <Label
          text={ADDITIONAL_CONDITIONS.label}
          variant={additional ? 'success' : 'info'}
          onClick={actions.setAdditionalLabel}
        />
        <Label
          text={ADDITIONAL_CONDITIONS.label2}
          variant={fileUpload ? 'success' : 'info'}
          onClick={actions.setFileUploadLabel}
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
        setInputState={actions.setAdditionalRecruiterConditions}
        chipsState={thirdStep.additionalRecruiterConditionsResult}
        setChipsState={actions.setAdditionalRecruiterConditionsResult}
      />
      {additional && (
        <>
          <Gap height={32} />
          <MultiSelect
            options={ADDITIONAL_RECRUITER_INFO_OPTIONS}
            label={ADDITIONAL_CONDITIONS.multiTitle}
            placeholder={ADDITIONAL_CONDITIONS.multiPlaceholder}
            state={thirdStep.additionalRecruiterOtherInfo}
            setState={actions.setAdditionalRecruiterOtherInfo}
          />
        </>
      )}
      {fileUpload && (
        <>
          <Gap height={32} />
          <Select
            options={SECURITY_OPTIONS}
            label={ADDITIONAL_CONDITIONS.selectTitle}
            placeholder={ADDITIONAL_CONDITIONS.selectPlaceholder}
            state={thirdStep.security}
            setState={actions.setSecurity}
          />
        </>
      )}
      {thirdStep.security === 'Да' && (
        <>
          <Gap height={16} />
          <FileUpload
            state={thirdStep.securityResult}
            setState={actions.setSecurityResult}
          />
        </>
      )}
    </>
  );
};

export default AdditionalConditions;
