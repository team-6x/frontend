import { Text, Input, Gap } from '../../../ui-kit';
import { EMPLOYEE_RESPONSIBILITIES } from '../../../utils/constans';

function EmployeeResponsibilities() {
  return (
    <>
      <Text weight="bold" color="grey80">
        {EMPLOYEE_RESPONSIBILITIES.title}
        <span style={{ color: 'var(--color-special-red-brended)' }}>
          &nbsp;*
        </span>
      </Text>
      <Gap height={12} />
      <Input icon placeholder={EMPLOYEE_RESPONSIBILITIES.additional} />
    </>
  );
}

export default EmployeeResponsibilities;
