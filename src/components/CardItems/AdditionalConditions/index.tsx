import styles from './styles.module.scss';
import { Gap, Label, Text, Input, MultiSelect, Select } from '../../../ui-kit';
import { FileUpload } from '../..';
import { ADDITIONAL_CONDITIONS } from '../../../utils/constans';
import { useActions } from '../../../hooks/actions';

const options = [{ name: 'Сфера деятельности', id: 1 }];
const options2 = [
  { name: 'Да', id: 1 },
  { name: 'Нет', id: 2 },
];
const labelState = true;
const optionState = true;

function AdditionalConditions() {
  const { setThirdResult } = useActions();
  return (
    <>
      <div className={styles.box}>
        <Label text={ADDITIONAL_CONDITIONS.label} variant="success" />
        <Label text={ADDITIONAL_CONDITIONS.label2} variant="success" />
      </div>
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {ADDITIONAL_CONDITIONS.labelDescription}
      </Text>
      <Gap height={12} />
      <Input
        icon
        placeholder={ADDITIONAL_CONDITIONS.additional}
        inputName="additionalRecruiterOtherInfo"
        handleStoreChange={setThirdResult}
      />
      {labelState && (
        <>
          <Gap height={32} />
          <MultiSelect
            options={options}
            label={ADDITIONAL_CONDITIONS.multiTitle}
            placeholder={ADDITIONAL_CONDITIONS.multiPlaceholder}
            inputName="additionalRecruiterRequirements"
            handleStoreChange={setThirdResult}
          />
        </>
      )}
      {labelState && (
        <>
          <Gap height={32} />
          <Select
            options={options2}
            label={ADDITIONAL_CONDITIONS.selectTitle}
            placeholder={ADDITIONAL_CONDITIONS.selectPlaceholder}
            inputName="security"
            handleStoreChange={setThirdResult}
          />
        </>
      )}
      {optionState && (
        <>
          <Gap height={16} />
          <FileUpload />
        </>
      )}
    </>
  );
}

export default AdditionalConditions;
