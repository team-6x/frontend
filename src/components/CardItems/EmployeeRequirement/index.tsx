import { Select, Gap, MultiSelect, Label, Input, Text } from '../../../ui-kit';
import InputTitle from '../InputTitle';
import { EMPLOYEE_REQUIREMENT } from '../../../utils/constans';
import { useState } from 'react';
import { useActions } from '../../../hooks/actions';

const experienceOptions = [
  { name: 'Не требуется', id: '1' },
  { name: 'От 1 года до 3 лет', id: '2' },
  { name: 'От 3 до 5 лет', id: '3' },
  { name: 'Больше 5 лет', id: '4' },
  { name: 'Не имеет значения', id: '5' },
];

const educationOptions = [
  { name: 'Не требуется', id: '1' },
  { name: 'Среднее', id: '2' },
  { name: 'Среднее специальное', id: '3' },
  { name: 'Высшее', id: '4' },
  { name: 'Не имеет значения', id: '5' },
];

const typeOptions = [
  { name: 'Полная занятость', id: '1' },
  { name: 'Частичная занятость', id: '2' },
  { name: 'Проектная работа', id: '3' },
  { name: 'Стажировка', id: '4' },
  { name: 'Волонтерство', id: '5' },
];

const skillsOptions = [
  { name: 'Здесь другой инпут с ХХ', id: '1' },
  { name: 'Нет', id: '2' },
  { name: 'Не имеет значения', id: '3' },
];

function EmployeeRequirement() {
  const [label, setLabel] = useState(false);

  const { setFirstResult } = useActions();
  return (
    <>
      <Select
        options={experienceOptions}
        label={<InputTitle>{EMPLOYEE_REQUIREMENT.inputTitle}</InputTitle>}
        placeholder={EMPLOYEE_REQUIREMENT.selectPlaceholder}
        inputName="experience"
        handleStoreChange={setFirstResult}
      />
      <Gap height={16} />
      <Select
        options={educationOptions}
        label={<InputTitle>{EMPLOYEE_REQUIREMENT.title2}</InputTitle>}
        placeholder={EMPLOYEE_REQUIREMENT.selectPlaceholder2}
        handleStoreChange={setFirstResult}
        inputName="education"
      />
      <Gap height={16} />
      <MultiSelect
        label={<InputTitle>{EMPLOYEE_REQUIREMENT.multiTitle}</InputTitle>}
        placeholder={EMPLOYEE_REQUIREMENT.multiPlaceholder}
        options={typeOptions}
        handleStoreChange={setFirstResult}
        inputName="type"
      />
      <Gap height={32} />
      <Label
        text={EMPLOYEE_REQUIREMENT.label}
        variant={label ? 'success' : 'info'}
        onClick={() => setLabel(prev => !prev)}
      />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {EMPLOYEE_REQUIREMENT.labelDescription}
      </Text>
      <Gap height={12} />
      <Input
        icon
        placeholder={EMPLOYEE_REQUIREMENT.additional}
        inputName="additionalRequirements"
        handleStoreChange={setFirstResult}
      />
      {label && (
        <>
          <Gap height={16} />
          <MultiSelect
            label={EMPLOYEE_REQUIREMENT.multiTitle2}
            placeholder={EMPLOYEE_REQUIREMENT.multiPlaceholder2}
            options={skillsOptions}
            inputName="skills"
            handleStoreChange={setFirstResult}
          />
        </>
      )}
    </>
  );
}

export default EmployeeRequirement;
