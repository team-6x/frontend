import styles from './styles.module.scss';
import { Text, Gap, Label, Input, Select, Tooltip } from '../../../ui-kit';
import { FileUpload } from '../../';
import { ADDITIONAL_INFORMATION } from '../../../utils/constans';
import { useState } from 'react';
import { useActions } from '../../../hooks/actions';
import { useAppSelector } from '../../../hooks/redux';

const options = [
  { name: 'Москва', id: '1' },
  { name: 'Санкт-Петербург', id: '2' },
  { name: 'Екатеринбург', id: '3' },
  { name: 'Новосибирск', id: '4' },
  { name: 'Казань', id: '5' },
  { name: 'Самара', id: '6' },
  { name: 'Краснодар', id: '7' },
  { name: 'Красноярск', id: '8' },
  { name: 'Челябинск', id: '9' },
  { name: 'Омск', id: '10' },
  { name: 'Владивосток', id: '11' },
  { name: 'Волгоград', id: '12' },
  { name: 'Саратов', id: '13' },
  { name: 'Ростов-на-Дону', id: '14' },
];
const testOptions = [
  { name: 'Да', id: '1' },
  { name: 'Нет', id: '2' },
];

function AdditionalInformation() {
  const [label, setLabel] = useState(false);
  const [label2, setLabel2] = useState(false);
  const [label3, setLabel3] = useState(false);
  const [optionState, setOptionState] = useState(false);

  const { setFirstResult } = useActions();

  const firstResult = useAppSelector(state => state.results.firstResult);

  return (
    <>
      <div className={styles.box}>
        <Label
          text={ADDITIONAL_INFORMATION.label}
          variant={label ? 'success' : 'info'}
          onClick={() => setLabel(prev => !prev)}
        />
        <Label
          text={ADDITIONAL_INFORMATION.label2}
          variant={label2 ? 'success' : 'info'}
          onClick={() => setLabel2(prev => !prev)}
        />
        <Label
          text={ADDITIONAL_INFORMATION.label3}
          variant={label3 ? 'success' : 'info'}
          onClick={() => setLabel3(prev => !prev)}
        />
      </div>
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {ADDITIONAL_INFORMATION.labelDescription}
      </Text>
      <Gap height={12} />
      <Input
        icon
        placeholder={ADDITIONAL_INFORMATION.additional}
        handleStoreChange={setFirstResult}
        inputName="additionalInfo2"
        initialValue={firstResult.additionalInfo2}
      />
      {label && (
        <>
          <Gap height={32} />
          <Select
            options={options}
            label={ADDITIONAL_INFORMATION.selectTitle}
            placeholder={ADDITIONAL_INFORMATION.selectPlaceholder}
            inputName="location"
            handleStoreChange={setFirstResult}
            initialValue={firstResult.location}
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
            <Input
              placeholder={ADDITIONAL_INFORMATION.inputPlaceholder}
              icon
              handleStoreChange={setFirstResult}
              inputName="banned"
              initialValue={firstResult.banned}
            />
            <Tooltip>{ADDITIONAL_INFORMATION.tooltip}</Tooltip>
          </div>
        </>
      )}
      {label3 && (
        <>
          <Gap height={16} />
          <Select
            options={testOptions}
            label={ADDITIONAL_INFORMATION.selectTitle2}
            placeholder={ADDITIONAL_INFORMATION.selectPlaceholder2}
            handler={() => setOptionState(!optionState)}
            inputName="test"
            handleStoreChange={setFirstResult}
            initialValue={firstResult.test}
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
