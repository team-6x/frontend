import { Select, Gap, MultiSelect, Label, Input, Text } from '../../../ui-kit';
import InputTitle from '../InputTitle';
import { EMPLOYEE_REQUIREMENT } from '../../../utils/constans';
import { useState } from 'react';
import { useActions } from '../../../hooks/actions';

const options = [{ name: 'Сфера деятельности', id: 1 }];

function EmployeeRequirement() {
  const [label, setLabel] = useState(false);

  const { setFirstResult } = useActions();
  return (
    <>
      <Select
        options={options}
        label={<InputTitle>{EMPLOYEE_REQUIREMENT.inputTitle}</InputTitle>}
        placeholder={EMPLOYEE_REQUIREMENT.selectPlaceholder}
        inputName="experience"
        handleStoreChange={setFirstResult}
      />
      <Gap height={16} />
      <Select
        options={options}
        label={<InputTitle>{EMPLOYEE_REQUIREMENT.title2}</InputTitle>}
        placeholder={EMPLOYEE_REQUIREMENT.selectPlaceholder2}
        handleStoreChange={setFirstResult}
        inputName="education"
      />
      <Gap height={16} />
      <MultiSelect
        label={<InputTitle>{EMPLOYEE_REQUIREMENT.multiTitle}</InputTitle>}
        placeholder={EMPLOYEE_REQUIREMENT.multiPlaceholder}
        options={options}
        handleStoreChange={setFirstResult}
        inputName="type"
      />
      <Gap height={32} />
      <Label
        text={EMPLOYEE_REQUIREMENT.label}
        variant="success"
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
            options={options}
            inputName="skills"
            handleStoreChange={setFirstResult}
          />
        </>
      )}
    </>
  );
}

export default EmployeeRequirement;
