import styles from './styles.module.scss';
import { Text, Gap, Label, Input, Select, Tooltip } from '../../../ui-kit';
import { FileUpload } from '../../';
import { ADDITIONAL_INFORMATION } from '../../../utils/constans';

const options = [{ name: 'Сфера деятельности', id: 1 }];
const options2 = [
  { name: 'Да', id: 1 },
  { name: 'Нет', id: 2 },
];
const optionState = true;
const labelState = true;
const labelState2 = true;
const labelState3 = true;

function AdditionalInformation() {
  return (
    <>
      <div className={styles.box}>
        <Label text={ADDITIONAL_INFORMATION.label} variant="success" />
        <Label text={ADDITIONAL_INFORMATION.label2} variant="success" />
        <Label text={ADDITIONAL_INFORMATION.label3} variant="success" />
      </div>
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {ADDITIONAL_INFORMATION.labelDescription}
      </Text>
      <Gap height={12} />
      <Input icon placeholder={ADDITIONAL_INFORMATION.additional} />
      {labelState && (
        <>
          <Gap height={32} />
          <Select
            options={options}
            label={ADDITIONAL_INFORMATION.selectTitle}
            placeholder={ADDITIONAL_INFORMATION.selectPlaceholder}
          />
        </>
      )}
      {labelState2 && (
        <>
          <Gap height={16} />
          <Text weight="bold" color="grey80">
            {ADDITIONAL_INFORMATION.inputTitle}
          </Text>
          <Gap height={12} />
          <div className={styles.container}>
            <Input placeholder={ADDITIONAL_INFORMATION.inputPlaceholder} icon />
            <Tooltip>{ADDITIONAL_INFORMATION.tooltip}</Tooltip>
          </div>
        </>
      )}
      {labelState3 && (
        <>
          <Gap height={16} />
          <Select
            options={options2}
            label={ADDITIONAL_INFORMATION.selectTitle2}
            placeholder={ADDITIONAL_INFORMATION.selectPlaceholder2}
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

export default AdditionalInformation;
