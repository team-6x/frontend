import styles from './styles.module.scss';
import { Text, Gap, Label, Input, Select, Tooltip } from '../../../ui-kit';
import { FileUpload } from '../../';
import { ADDITIONAL_INFORMATION } from '../../../utils/constans';
import { useState } from 'react';

const options = [{ name: 'Сфера деятельности', id: 1 }];
const options2 = [
  { name: 'Да', id: 1 },
  { name: 'Нет', id: 2 },
];

function AdditionalInformation() {
  const [label, setLabel] = useState(false);
  const [label2, setLabel2] = useState(false);
  const [label3, setLabel3] = useState(false);
  const [optionState, setOptionState] = useState(false);

  return (
    <>
      <div className={styles.box}>
        <Label
          text={ADDITIONAL_INFORMATION.label}
          variant="success"
          onClick={() => setLabel(true)}
        />
        <Label
          text={ADDITIONAL_INFORMATION.label2}
          variant="success"
          onClick={() => setLabel2(true)}
        />
        <Label
          text={ADDITIONAL_INFORMATION.label3}
          variant="success"
          onClick={() => setLabel3(true)}
        />
      </div>
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {ADDITIONAL_INFORMATION.labelDescription}
      </Text>
      <Gap height={12} />
      <Input icon placeholder={ADDITIONAL_INFORMATION.additional} />
      {label && (
        <>
          <Gap height={32} />
          <Select
            options={options}
            label={ADDITIONAL_INFORMATION.selectTitle}
            placeholder={ADDITIONAL_INFORMATION.selectPlaceholder}
          />
        </>
      )}
      {label2 && (
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
      {label3 && (
        <>
          <Gap height={16} />
          <Select
            options={options2}
            label={ADDITIONAL_INFORMATION.selectTitle2}
            placeholder={ADDITIONAL_INFORMATION.selectPlaceholder2}
            handler={() => setOptionState(!optionState)}
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
