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
import { useState } from 'react';

function RecruiterRequirements() {
  const thirdStep = useAppSelector(state => state.inputsForm.thirdStep);
  const {
    setRecruitCount,
    setRecruitType,
    setAdditionalRecruiterRequirements,
    setAdditionalRecruiterRequirementsResult,
    setExperienceForRecruiter,
  } = useActions();
  const [label, setLabel] = useState(false);

  return (
    <>
      <TextWithAsterisk children={RECRUITER_REQUIREMENTS.selectTitle} />
      <Gap height={12} />
      <div className={styles.container}>
        <Select
          options={RECRUIT_COUNT_OPTIONS}
          placeholder={RECRUITER_REQUIREMENTS.selectPlaceholder}
          state={thirdStep.recruitCount}
          setState={setRecruitCount}
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
        setState={setRecruitType}
      />
      <Gap height={32} />
      <Label
        text={RECRUITER_REQUIREMENTS.label}
        variant={label ? 'success' : 'info'}
        onClick={() => setLabel(prev => !prev)}
      />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {RECRUITER_REQUIREMENTS.labelDescription}
      </Text>
      <Gap height={12} />
      <TextArea
        placeholder={RECRUITER_REQUIREMENTS.additional}
        inputState={thirdStep.additionalRecruiterRequirements}
        setInputState={setAdditionalRecruiterRequirements}
        chipsState={thirdStep.additionalRecruiterRequirementsResult}
        setChipsState={setAdditionalRecruiterRequirementsResult}
      />
      {label && (
        <>
          <Gap height={16} />
          <Select
            label={RECRUITER_REQUIREMENTS.selectTitle2}
            placeholder={RECRUITER_REQUIREMENTS.selectPlaceholder2}
            options={EXPERIENCE_FOR_RECRUITER_OPTIONS}
            state={thirdStep.experienceForRecruiter}
            setState={setExperienceForRecruiter}
          />
        </>
      )}
    </>
  );
}

export default RecruiterRequirements;
