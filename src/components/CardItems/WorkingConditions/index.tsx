import styles from './styles.module.scss';
import {
  Gap,
  Input,
  TextArea,
  Checkbox,
  Select,
  MultiSelect,
  Label,
  Text,
  TextWithAsterisk,
} from '../../../ui-kit';
import {
  WORKING_CONDITIONS,
  FORMAT_OPTIONS,
  WORK_FORMAT_OPTIONS,
  MEDICAL_OPTIONS,
  BONUSES_OPTIONS,
} from '../../../utils/constans';
import { useActions, useAppSelector } from '../../../hooks/useActions';

const WorkingConditions: React.FC = () => {
  const { firstStep } = useAppSelector(state => state.inputsForm);
  const { medical, bonuses } = useAppSelector(state => state.labels);
  const actions = useActions();

  return (
    <>
      <TextWithAsterisk children={WORKING_CONDITIONS.inputTitle} />
      <Gap height={12} />
      <div className={styles.container}>
        <Input
          placeholder={WORKING_CONDITIONS.inputPlaceholder}
          state={firstStep.salaryMin}
          setState={actions.setMinSalary}
        />
        <Input
          placeholder={WORKING_CONDITIONS.inputPlaceholder2}
          state={firstStep.salaryMax}
          setState={actions.setMaxSalary}
        />
      </div>
      <Gap height={12} />
      <Checkbox label={WORKING_CONDITIONS.checkbox} />
      <Gap height={16} />
      <Select
        options={FORMAT_OPTIONS}
        label={<TextWithAsterisk children={WORKING_CONDITIONS.selectTitle} />}
        placeholder={WORKING_CONDITIONS.selectPlaceholder}
        state={firstStep.format}
        setState={actions.setFormat}
      />
      <Gap height={16} />
      <MultiSelect
        label={<TextWithAsterisk children={WORKING_CONDITIONS.multiTitle} />}
        placeholder={WORKING_CONDITIONS.multiPlaceholder}
        options={WORK_FORMAT_OPTIONS}
        state={firstStep.workFormat}
        setState={actions.setWorkFormat}
      />
      <Gap height={32} />
      <div className={styles.box}>
        <Label
          text={WORKING_CONDITIONS.label}
          variant={medical ? 'success' : 'info'}
          onClick={actions.setMedicalLabel}
        />
        <Label
          text={WORKING_CONDITIONS.label2}
          variant={bonuses ? 'success' : 'info'}
          onClick={actions.setBonusesLabel}
        />
      </div>
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {WORKING_CONDITIONS.labelDescription}
      </Text>
      <Gap height={12} />
      <TextArea
        placeholder={WORKING_CONDITIONS.additional}
        inputState={firstStep.additionalWorkConditions}
        setInputState={actions.setAdditionalWorkConditions}
        chipsState={firstStep.additionalWorkConditionsResult}
        setChipsState={actions.setAdditionalWorkConditionsResult}
      />
      {medical && (
        <>
          <Gap height={16} />
          <Select
            options={MEDICAL_OPTIONS}
            label={WORKING_CONDITIONS.selectTitle2}
            placeholder={WORKING_CONDITIONS.selectPlaceholder2}
            state={firstStep.medical}
            setState={actions.setMedical}
          />
        </>
      )}
      {bonuses && (
        <>
          <Gap height={16} />
          <MultiSelect
            label={WORKING_CONDITIONS.multiTitle2}
            placeholder={WORKING_CONDITIONS.multiPlaceholder2}
            options={BONUSES_OPTIONS}
            state={firstStep.bonuses}
            setState={actions.setBonuses}
          />
        </>
      )}
    </>
  );
};

export default WorkingConditions;
