import styles from './styles.module.scss';
import InputTitle from '../InputTitle';
import { Input, Tooltip, Gap, Label, Text } from '../../../ui-kit';
import { SALARY } from '../../../utils/constans';

const labelState = true;

function Salary() {
  return (
    <>
      <InputTitle>{SALARY.inputTitle}</InputTitle>
      <Gap height={12} />
      <div className={styles.container}>
        <Input placeholder={SALARY.inputPlaceholder} />
        <Tooltip>{SALARY.tooltip}</Tooltip>
      </div>
      <Gap height={32} />
      <Label text={SALARY.label} variant="success" />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {SALARY.labelDescription}
      </Text>
      {labelState && (
        <>
          <Gap height={16} />
          <Text weight="bold" color="grey80">
            {SALARY.inputTitle2}
          </Text>
          <Gap height={12} />
          <div className={styles.container}>
            <Input placeholder={SALARY.inputPlaceholder2} />
            <Tooltip>{SALARY.tooltip2}</Tooltip>
          </div>
        </>
      )}
    </>
  );
}

export default Salary;
