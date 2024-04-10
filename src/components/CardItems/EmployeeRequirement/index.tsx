import {
  Select,
  Gap,
  MultiSelect,
  Label,
  TextArea,
  Text,
  SearchInput,
  TextWithAsterisk,
} from '../../../ui-kit';
import {
  EMPLOYEE_REQUIREMENT,
  EXPERIENCE_OPTIONS,
  EDUCATION_OPTIONS,
  TYPE_OPTIONS,
} from '../../../utils/constans';
import { useState } from 'react';
import { useActions, useAppSelector } from '../../../hooks/useActions';
import { useLazyGetSkillsQuery } from '../../../store/hrSpace/hh.api';

const EmployeeRequirement = () => {
  const {
    experience,
    education,
    type,
    additionalRequirements,
    additionalRequirementsResult,
    skills,
  } = useAppSelector(state => state.inputsForm.firstStep);
  const {
    setExperience,
    setEducation,
    setType,
    setAdditionalRequirements,
    setAdditionalRequirementsResult,
    setSkills,
  } = useActions();
  const [getSkills, { data: skillsOptions }] = useLazyGetSkillsQuery();
  const [labelClick, setLabelClick] = useState(false);

  return (
    <>
      <Select
        options={EXPERIENCE_OPTIONS}
        label={<TextWithAsterisk children={EMPLOYEE_REQUIREMENT.selectTitle} />}
        placeholder={EMPLOYEE_REQUIREMENT.selectPlaceholder}
        state={experience}
        setState={setExperience}
      />
      <Gap height={16} />
      <Select
        options={EDUCATION_OPTIONS}
        label={
          <TextWithAsterisk children={EMPLOYEE_REQUIREMENT.selectTitle2} />
        }
        placeholder={EMPLOYEE_REQUIREMENT.selectPlaceholder2}
        state={education}
        setState={setEducation}
      />
      <Gap height={16} />
      <MultiSelect
        label={<TextWithAsterisk children={EMPLOYEE_REQUIREMENT.multiTitle} />}
        placeholder={EMPLOYEE_REQUIREMENT.multiPlaceholder}
        options={TYPE_OPTIONS}
        state={type}
        setState={setType}
      />
      <Gap height={32} />
      <Label
        text={EMPLOYEE_REQUIREMENT.label}
        variant={labelClick ? 'success' : 'info'}
        onClick={() => setLabelClick(!labelClick)}
      />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {EMPLOYEE_REQUIREMENT.labelDescription}
      </Text>
      <Gap height={12} />
      <TextArea
        placeholder={EMPLOYEE_REQUIREMENT.additional}
        inputState={additionalRequirements}
        setInputState={setAdditionalRequirements}
        chipsState={additionalRequirementsResult}
        setChipsState={setAdditionalRequirementsResult}
      />
      {labelClick && (
        <>
          <Gap height={16} />
          <Text weight="bold" color="grey80">
            {EMPLOYEE_REQUIREMENT.multiTitle2}
          </Text>
          <Gap height={8} />
          <SearchInput
            onSearch={getSkills}
            placeholder={EMPLOYEE_REQUIREMENT.multiPlaceholder2}
            options={skillsOptions?.items}
            state={skills}
            setState={setSkills}
          />
        </>
      )}
    </>
  );
};

export default EmployeeRequirement;
