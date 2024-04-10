import { TextArea, Gap, TextWithAsterisk } from '../../../ui-kit';
import { EMPLOYEE_RESPONSIBILITIES } from '../../../utils/constans';
import { useActions, useAppSelector } from '../../../hooks/useActions';

function EmployeeResponsibilities() {
  const { responsibilities, responsibilitiesResult } = useAppSelector(
    state => state.inputsForm.firstStep,
  );
  const { setResponsibilities, setResponsibilitiesResult } = useActions();

  return (
    <>
      <TextWithAsterisk children={EMPLOYEE_RESPONSIBILITIES.inputTitle} />
      <Gap height={12} />
      <TextArea
        placeholder={EMPLOYEE_RESPONSIBILITIES.additional}
        inputState={responsibilities}
        setInputState={setResponsibilities}
        chipsState={responsibilitiesResult}
        setChipsState={setResponsibilitiesResult}
      />
    </>
  );
}

export default EmployeeResponsibilities;
