import styles from './styles.module.scss';
import { Gap, Label, Text, Input, MultiSelect, Select } from '../../../ui-kit';
import { FileUpload } from '../..';
import { ADDITIONAL_CONDITIONS } from '../../../utils/constans';
import { useActions } from '../../../hooks/actions';
import { useState } from 'react';
import { useAppSelector } from '../../../hooks/redux';

const options = [
  { name: 'Поиск и предоставление релевантных резюме', id: '1' },
  { name: 'Организация собеседований с заказчиком', id: '2' },
  { name: 'Запрос рекомендаций с прошлых мест работы', id: '3' },
  { name: 'Отправка финалисту пришлашения на работу', id: '4' },
];
const options2 = [
  { name: 'Да', id: '1' },
  { name: 'Нет', id: '2' },
];

const optionState = true;

function AdditionalConditions() {
  const { setThirdResult } = useActions();

  const [label, setLabel] = useState(false);
  const [label2, setLabel2] = useState(false);

  const thirdResult = useAppSelector(state => state.results.thirdResult);

  return (
    <>
      <div className={styles.box}>
        <Label
          text={ADDITIONAL_CONDITIONS.label}
          variant={label ? 'success' : 'info'}
          onClick={() => setLabel(prev => !prev)}
        />
        <Label
          text={ADDITIONAL_CONDITIONS.label2}
          variant={label2 ? 'success' : 'info'}
          onClick={() => setLabel2(prev => !prev)}
        />
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
        initialValue={thirdResult.additionalRecruiterOtherInfo}
      />
      {label && (
        <>
          <Gap height={32} />
          <MultiSelect
            options={options}
            label={ADDITIONAL_CONDITIONS.multiTitle}
            placeholder={ADDITIONAL_CONDITIONS.multiPlaceholder}
            inputName="additionalRecruiterRequirements"
            handleStoreChange={setThirdResult}
            initialValue={thirdResult.additionalRecruiterRequirements}
          />
        </>
      )}
      {label2 && (
        <>
          <Gap height={32} />
          <Select
            options={options2}
            label={ADDITIONAL_CONDITIONS.selectTitle}
            placeholder={ADDITIONAL_CONDITIONS.selectPlaceholder}
            inputName="security"
            handleStoreChange={setThirdResult}
            initialValue={thirdResult.security}
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
