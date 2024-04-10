import styles from './styles.module.scss';
import {
  Gap,
  Label,
  Text,
  Select,
  Tooltip,
  MultiSelect,
  TextArea,
  TextWithAsterisk,
} from '../../../ui-kit';
import {
  RECRUITER_REQUIREMENTS,
  RECRUIT_COUNT_OPTIONS,
  RECRUIT_TYPE_OPTIONS,
  EXPERIENCE_FOR_RECRUITER_OPTIONS,
} from '../../../utils/constans';
import { useActions, useAppSelector } from '../../../hooks/useActions';

const RecruiterRequirements: React.FC = () => {
  const { thirdStep } = useAppSelector(state => state.inputsForm);
  const { recruiter } = useAppSelector(state => state.labels);
  const actions = useActions();

  return (
    <>
      <TextWithAsterisk children={RECRUITER_REQUIREMENTS.selectTitle} />
      <Gap height={12} />
      <div className={styles.container}>
        <Select
          options={RECRUIT_COUNT_OPTIONS}
          placeholder={RECRUITER_REQUIREMENTS.selectPlaceholder}
          state={thirdStep.recruitCount}
          setState={actions.setRecruitCount}
        />
        <Tooltip>{RECRUITER_REQUIREMENTS.tooltip}</Tooltip>
      </div>
      <Gap height={16} />
      <MultiSelect
        label={
          <TextWithAsterisk children={RECRUITER_REQUIREMENTS.multiTitle} />
        }
        placeholder={RECRUITER_REQUIREMENTS.multiPlaceholder}
        options={RECRUIT_TYPE_OPTIONS}
        state={thirdStep.recruitType}
        setState={actions.setRecruitType}
      />
      <Gap height={32} />
      <Label
        text={RECRUITER_REQUIREMENTS.label}
        variant={recruiter ? 'success' : 'info'}
        onClick={actions.setRecruiterLabel}
      />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {RECRUITER_REQUIREMENTS.labelDescription}
      </Text>
      <Gap height={12} />
      <TextArea
        placeholder={RECRUITER_REQUIREMENTS.additional}
        inputState={thirdStep.additionalRecruiterRequirements}
        setInputState={actions.setAdditionalRecruiterRequirements}
        chipsState={thirdStep.additionalRecruiterRequirementsResult}
        setChipsState={actions.setAdditionalRecruiterRequirementsResult}
      />
      {recruiter && (
        <>
          <Gap height={16} />
          <Select
            label={RECRUITER_REQUIREMENTS.selectTitle2}
            placeholder={RECRUITER_REQUIREMENTS.selectPlaceholder2}
            options={EXPERIENCE_FOR_RECRUITER_OPTIONS}
            state={thirdStep.experienceForRecruiter}
            setState={actions.setExperienceForRecruiter}
          />
        </>
      )}
    </>
  );
};

export default RecruiterRequirements;
