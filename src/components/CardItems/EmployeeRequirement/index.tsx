import { Select, Text, Gap, MultiSelect, Label, Input } from '../../../ui-kit';
import { EMPLOYEE_REQUIREMENT } from '../../../utils/constans';

const options = [{ name: 'Сфера деятельности', id: 1 }];
const labelState = true;

function EmployeeRequirement() {
  return (
    <>
      <Select
        options={options}
        label={
          <Text weight="bold" color="grey80">
            {EMPLOYEE_REQUIREMENT.title}
            <span style={{ color: 'var(--color-special-red-brended)' }}>
              &nbsp;*
            </span>
          </Text>
        }
        placeholder={EMPLOYEE_REQUIREMENT.selectPlaceholder}
      />
      <Gap height={16} />
      <Select
        options={options}
        label={
          <Text weight="bold" color="grey80">
            {EMPLOYEE_REQUIREMENT.title2}
            <span style={{ color: 'var(--color-special-red-brended)' }}>
              &nbsp;*
            </span>
          </Text>
        }
        placeholder={EMPLOYEE_REQUIREMENT.selectPlaceholder2}
      />
      <Gap height={16} />
      <MultiSelect
        label={
          <Text weight="bold" color="grey80">
            {EMPLOYEE_REQUIREMENT.multiTitle}
            <span style={{ color: 'var(--color-special-red-brended)' }}>
              &nbsp;*
            </span>
          </Text>
        }
        placeholder={EMPLOYEE_REQUIREMENT.multiPlaceholder}
        options={options}
      />
      <Gap height={32} />
      <Label text={EMPLOYEE_REQUIREMENT.label} variant="success" />
      <Gap height={12} />
      <Input icon placeholder={EMPLOYEE_REQUIREMENT.additional} />
      {labelState && (
        <>
          <Gap height={16} />
          <MultiSelect
            label={
              <Text weight="bold" color="grey80">
                {EMPLOYEE_REQUIREMENT.multiTitle2}
                <span style={{ color: 'var(--color-special-red-brended)' }}>
                  &nbsp;*
                </span>
              </Text>
            }
            placeholder={EMPLOYEE_REQUIREMENT.multiPlaceholder2}
            options={options}
          />
        </>
      )}
    </>
  );
}

export default EmployeeRequirement;
