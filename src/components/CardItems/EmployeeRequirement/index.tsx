import { Select, Gap, MultiSelect, Label, Input, Text } from '../../../ui-kit';
import InputTitle from '../InputTitle';
import { EMPLOYEE_REQUIREMENT } from '../../../utils/constans';

const options = [{ name: 'Сфера деятельности', id: 1 }];
const labelState = true;

function EmployeeRequirement() {
  return (
    <>
      <Select
        options={options}
        label={<InputTitle>{EMPLOYEE_REQUIREMENT.inputTitle}</InputTitle>}
        placeholder={EMPLOYEE_REQUIREMENT.selectPlaceholder}
      />
      <Gap height={16} />
      <Select
        options={options}
        label={<InputTitle>{EMPLOYEE_REQUIREMENT.title2}</InputTitle>}
        placeholder={EMPLOYEE_REQUIREMENT.selectPlaceholder2}
      />
      <Gap height={16} />
      <MultiSelect
        label={<InputTitle>{EMPLOYEE_REQUIREMENT.multiTitle}</InputTitle>}
        placeholder={EMPLOYEE_REQUIREMENT.multiPlaceholder}
        options={options}
      />
      <Gap height={32} />
      <Label text={EMPLOYEE_REQUIREMENT.label} variant="success" />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {EMPLOYEE_REQUIREMENT.labelDescription}
      </Text>
      <Gap height={12} />
      <Input icon placeholder={EMPLOYEE_REQUIREMENT.additional} />
      {labelState && (
        <>
          <Gap height={16} />
          <MultiSelect
            label={EMPLOYEE_REQUIREMENT.multiTitle2}
            placeholder={EMPLOYEE_REQUIREMENT.multiPlaceholder2}
            options={options}
          />
        </>
      )}
    </>
  );
}

export default EmployeeRequirement;
