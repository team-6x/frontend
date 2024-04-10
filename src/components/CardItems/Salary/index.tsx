import styles from './styles.module.scss';
import {
  Input,
  Tooltip,
  Gap,
  Label,
  Text,
  TextWithAsterisk,
} from '../../../ui-kit';
import { SALARY } from '../../../utils/constans';
import { useAppSelector, useActions } from '../../../hooks/useActions';

const Salary: React.FC = () => {
  const { thirdStep } = useAppSelector(state => state.inputsForm);
  const { salary } = useAppSelector(state => state.labels);
  const actions = useActions();

  return (
    <>
      <TextWithAsterisk children={SALARY.inputTitle} />
      <Gap height={12} />
      <div className={styles.container}>
        <Input
          placeholder={SALARY.inputPlaceholder}
          state={thirdStep.compensation}
          setState={actions.setCompensation}
        />
        <Tooltip>{SALARY.tooltip}</Tooltip>
      </div>
      <Gap height={32} />
      <Label
        text={SALARY.label}
        variant={salary ? 'success' : 'info'}
        onClick={actions.setSalaryLabel}
      />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {SALARY.labelDescription}
      </Text>
      {salary && (
        <>
          <Gap height={16} />
          <Text weight="bold" color="grey80">
            {SALARY.inputTitle2}
          </Text>
          <Gap height={12} />
          <div className={styles.container}>
            <Input
              placeholder={SALARY.inputPlaceholder2}
              state={thirdStep.costForSpeed}
              setState={actions.setCostForSpeed}
            />
            <Tooltip>{SALARY.tooltip2}</Tooltip>
          </div>
        </>
      )}
    </>
  );
};

export default Salary;
