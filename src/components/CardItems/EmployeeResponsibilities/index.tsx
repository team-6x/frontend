import { Input, Gap } from '../../../ui-kit';
import InputTitle from '../InputTitle';
import { EMPLOYEE_RESPONSIBILITIES } from '../../../utils/constans';
import { useActions } from '../../../hooks/actions';
import { useAppSelector } from '../../../hooks/redux';

function EmployeeResponsibilities() {
  const { setFirstResult } = useActions();

  const firstResult = useAppSelector(state => state.results.firstResult);
  return (
    <>
      <InputTitle>{EMPLOYEE_RESPONSIBILITIES.inputTitle}</InputTitle>
      <Gap height={12} />
      <Input
        icon
        placeholder={EMPLOYEE_RESPONSIBILITIES.additional}
        handleStoreChange={setFirstResult}
        inputName="responsibilities"
        initialValue={firstResult.responsibilities}
      />
    </>
  );
}

export default EmployeeResponsibilities;
