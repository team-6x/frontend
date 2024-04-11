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
import { useActions, useAppSelector } from '../../../hooks/useActions';
import { useLazyGetSkillsQuery } from '../../../store/hrSpace/hh.api';
// import {
//   useGetExperiencesQuery,
//   useLazyGetRegisterQuery,
// } from '../../../store/hrSpace/hrSpace.api';
// import { useEffect } from 'react';

const EmployeeRequirement: React.FC = () => {
  const { firstStep } = useAppSelector(state => state.inputsForm);
  const { skills } = useAppSelector(state => state.labels);
  const actions = useActions();
  const [getSkills, { data: skillsOptions }] = useLazyGetSkillsQuery();
  // const { data: experienceOptions } = useGetExperiencesQuery();
  // const [getRegister] = useLazyGetRegisterQuery();

  // console.log(experienceOptions);

  // useEffect(() => {
  //   getRegister({
  //     email: '1111@1111.com',
  //     password: '12345678',
  //     is_active: true,
  //     is_superuser: false,
  //     is_verified: false,
  //     name: 'privet',
  //     surname: 'privet',
  //     role: 'Работодатель',
  //     phone_number: '79297599942',
  //   });
  // }, []);

  return (
    <>
      <Select
        options={EXPERIENCE_OPTIONS}
        label={<TextWithAsterisk children={EMPLOYEE_REQUIREMENT.selectTitle} />}
        placeholder={EMPLOYEE_REQUIREMENT.selectPlaceholder}
        state={firstStep.experience}
        setState={actions.setExperience}
      />
      <Gap height={16} />
      <Select
        options={EDUCATION_OPTIONS}
        label={
          <TextWithAsterisk children={EMPLOYEE_REQUIREMENT.selectTitle2} />
        }
        placeholder={EMPLOYEE_REQUIREMENT.selectPlaceholder2}
        state={firstStep.education}
        setState={actions.setEducation}
      />
      <Gap height={16} />
      <MultiSelect
        label={<TextWithAsterisk children={EMPLOYEE_REQUIREMENT.multiTitle} />}
        placeholder={EMPLOYEE_REQUIREMENT.multiPlaceholder}
        options={TYPE_OPTIONS}
        state={firstStep.type}
        setState={actions.setType}
      />
      <Gap height={32} />
      <Label
        text={EMPLOYEE_REQUIREMENT.label}
        variant={skills ? 'success' : 'info'}
        onClick={actions.setSkillsLabel}
      />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {EMPLOYEE_REQUIREMENT.labelDescription}
      </Text>
      <Gap height={12} />
      <TextArea
        placeholder={EMPLOYEE_REQUIREMENT.additional}
        inputState={firstStep.additionalRequirements}
        setInputState={actions.setAdditionalRequirements}
        chipsState={firstStep.additionalRequirementsResult}
        setChipsState={actions.setAdditionalRequirementsResult}
      />
      {skills && (
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
            state={firstStep.skills}
            setState={actions.setSkills}
          />
        </>
      )}
    </>
  );
};

export default EmployeeRequirement;
