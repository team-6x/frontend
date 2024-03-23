import styles from './styles.module.scss';
import InputTitle from '../InputTitle';
import {
  Gap,
  Input,
  Checkbox,
  Select,
  MultiSelect,
  Label,
  Text,
} from '../../../ui-kit';
import { WORKING_CONDITIONS } from '../../../utils/constans';

const options = [{ name: 'Сфера деятельности', id: 1 }];
const labelState = true;
const labelState2 = true;

function WorkingConditions() {
  return (
    <>
      <InputTitle>{WORKING_CONDITIONS.inputTitle}</InputTitle>
      <Gap height={12} />
      <div className={styles.container}>
        <Input placeholder={WORKING_CONDITIONS.inputPlaceholder} />
        <Input placeholder={WORKING_CONDITIONS.inputPlaceholder2} />
      </div>
      <Gap height={12} />
      <Checkbox label={WORKING_CONDITIONS.checkbox} />
      <Gap height={16} />
      <Select
        options={options}
        label={<InputTitle>{WORKING_CONDITIONS.selectTitle}</InputTitle>}
        placeholder={WORKING_CONDITIONS.selectPlaceholder}
      />
      <Gap height={16} />
      <MultiSelect
        label={<InputTitle>{WORKING_CONDITIONS.multiTitle}</InputTitle>}
        placeholder={WORKING_CONDITIONS.multiPlaceholder}
        options={options}
      />
      <Gap height={32} />
      <div className={styles.box}>
        <Label text={WORKING_CONDITIONS.label} variant="success" />
        <Label text={WORKING_CONDITIONS.label2} variant="success" />
      </div>
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {WORKING_CONDITIONS.labelDescription}
      </Text>
      <Gap height={12} />
      <Input icon placeholder={WORKING_CONDITIONS.additional} />
      {labelState && (
        <>
          <Gap height={16} />
          <Select
            options={options}
            label={WORKING_CONDITIONS.selectTitle2}
            placeholder={WORKING_CONDITIONS.selectPlaceholder2}
          />
        </>
      )}
      {labelState2 && (
        <>
          <Gap height={16} />
          <MultiSelect
            label={WORKING_CONDITIONS.multiTitle2}
            placeholder={WORKING_CONDITIONS.multiPlaceholder2}
            options={options}
          />
        </>
      )}
    </>
  );
}

export default WorkingConditions;
