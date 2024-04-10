import { TextArea, Gap, TextWithAsterisk } from '../../../ui-kit';
import { EMPLOYEE_RESPONSIBILITIES } from '../../../utils/constans';
import { useActions, useAppSelector } from '../../../hooks/useActions';

const EmployeeResponsibilities: React.FC = () => {
  const { firstStep } = useAppSelector(state => state.inputsForm);
  const { setResponsibilities, setResponsibilitiesResult } = useActions();

  return (
    <>
      <TextWithAsterisk children={EMPLOYEE_RESPONSIBILITIES.inputTitle} />
      <Gap height={12} />
      <TextArea
        placeholder={EMPLOYEE_RESPONSIBILITIES.additional}
        inputState={firstStep.responsibilities}
        setInputState={setResponsibilities}
        chipsState={firstStep.responsibilitiesResult}
        setChipsState={setResponsibilitiesResult}
      />
    </>
  );
};

export default EmployeeResponsibilities;
