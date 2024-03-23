import { Input, Gap } from '../../../ui-kit';
import InputTitle from '../InputTitle';
import { EMPLOYEE_RESPONSIBILITIES } from '../../../utils/constans';

function EmployeeResponsibilities() {
  return (
    <>
      <InputTitle>{EMPLOYEE_RESPONSIBILITIES.inputTitle}</InputTitle>
      <Gap height={12} />
      <Input icon placeholder={EMPLOYEE_RESPONSIBILITIES.additional} />
    </>
  );
}

export default EmployeeResponsibilities;
