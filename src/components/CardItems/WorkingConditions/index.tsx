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
import { useState } from 'react';
import { useActions } from '../../../hooks/actions';
import { useAppSelector } from '../../../hooks/redux';

const formatOptions = [
  { name: 'Офис', id: '1' },
  { name: 'Удаленка', id: '2' },
  { name: 'Гибрид', id: '3' },
];

const workFormalOptions = [
  { name: 'Оформление по ТК РФ', id: '1' },
  { name: 'Трудовой договор', id: '2' },
  { name: 'ГПХ', id: '3' },
  { name: 'ИП', id: '4' },
  { name: 'Самозанятость', id: '5' },
];

const medicalOptions = [
  { name: 'Да', id: '1' },
  { name: 'Нет', id: '2' },
];

const bonusesOptions = [
  { name: 'Квартальные и/или годовые премии', id: '1' },
  { name: 'Разовые премии', id: '2' },
  { name: 'Обучение на курсах за счет компании', id: '3' },
  { name: 'Компенсация питания', id: '4' },
  { name: 'Скидки в магазинах-партнерах', id: '5' },
  { name: 'Оплата сессий с психологом', id: '6' },
];

function WorkingConditions() {
  const [label, setLabel] = useState(false);
  const [label2, setLabel2] = useState(false);

  const firstResults = useAppSelector(state => state.results.firstResult);

  const { setFirstResult } = useActions();
  return (
    <>
      <InputTitle>{WORKING_CONDITIONS.inputTitle}</InputTitle>
      <Gap height={12} />
      <div className={styles.container}>
        <Input
          placeholder={WORKING_CONDITIONS.inputPlaceholder}
          inputName="salaryMin"
          handleStoreChange={setFirstResult}
          args={{ type: 'number' }}
          initialValue={firstResults.salaryMin}
        />
        <Input
          placeholder={WORKING_CONDITIONS.inputPlaceholder2}
          inputName="salaryMax"
          handleStoreChange={setFirstResult}
          args={{ type: 'number' }}
          initialValue={firstResults.salaryMax}
        />
      </div>
      <Gap height={12} />
      <Checkbox label={WORKING_CONDITIONS.checkbox} />
      <Gap height={16} />
      <Select
        options={formatOptions}
        label={<InputTitle>{WORKING_CONDITIONS.selectTitle}</InputTitle>}
        placeholder={WORKING_CONDITIONS.selectPlaceholder}
        inputName="format"
        handleStoreChange={setFirstResult}
        initialValue={firstResults.format}
      />
      <Gap height={16} />
      <MultiSelect
        label={<InputTitle>{WORKING_CONDITIONS.multiTitle}</InputTitle>}
        placeholder={WORKING_CONDITIONS.multiPlaceholder}
        options={workFormalOptions}
        inputName="workFormal"
        handleStoreChange={setFirstResult}
      />
      <Gap height={32} />
      <div className={styles.box}>
        <Label
          text={WORKING_CONDITIONS.label}
          variant={label ? 'success' : 'info'}
          onClick={() => setLabel(prev => !prev)}
        />
        <Label
          text={WORKING_CONDITIONS.label2}
          variant={label2 ? 'success' : 'info'}
          onClick={() => setLabel2(prev => !prev)}
        />
      </div>
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {WORKING_CONDITIONS.labelDescription}
      </Text>
      <Gap height={12} />
      <Input
        icon
        placeholder={WORKING_CONDITIONS.additional}
        inputName="additionalWorkConditions"
        handleStoreChange={setFirstResult}
        initialValue={firstResults.additionalWorkConditions}
      />
      {label && (
        <>
          <Gap height={16} />
          <Select
            options={medicalOptions}
            label={WORKING_CONDITIONS.selectTitle2}
            placeholder={WORKING_CONDITIONS.selectPlaceholder2}
            inputName="medical"
            handleStoreChange={setFirstResult}
            initialValue={firstResults.medical}
          />
        </>
      )}
      {label2 && (
        <>
          <Gap height={16} />
          <MultiSelect
            label={WORKING_CONDITIONS.multiTitle2}
            placeholder={WORKING_CONDITIONS.multiPlaceholder2}
            options={bonusesOptions}
            inputName="bonuses"
            handleStoreChange={setFirstResult}
          />
        </>
      )}
    </>
  );
}

export default WorkingConditions;
