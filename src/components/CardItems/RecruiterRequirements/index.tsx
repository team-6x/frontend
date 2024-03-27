import styles from './styles.module.scss';
import InputTitle from '../InputTitle';
import {
  Gap,
  Label,
  Text,
  Select,
  Tooltip,
  MultiSelect,
  Input,
} from '../../../ui-kit';
import { RECRUITER_REQUIREMENTS } from '../../../utils/constans';
import { useActions } from '../../../hooks/actions';
import { useState } from 'react';
import { useAppSelector } from '../../../hooks/redux';

const recruitCountOptions = [
  { name: '1', id: '1' },
  { name: '2', id: '2' },
  { name: '3', id: '3' },
];

const recruitTypeOptions = [
  { name: 'Юр.лица, ИП и самозанятые', id: '1' },
  { name: 'Физ. лица', id: '2' },
];

const experienceForRecruiterOptions = [
  { name: 'Не требуется', id: '1' },
  { name: 'От 1 года до 3 лет', id: '2' },
  { name: 'От 3 до 5 лет', id: '3' },
  { name: 'Больше 5 лет', id: '4' },
  { name: 'Не имеет значения', id: '5' },
];

function RecruiterRequirements() {
  const { setThirdResult } = useActions();
  const [label, setLabel] = useState(false);

  const thirdResult = useAppSelector(state => state.results.thirdResult);

  return (
    <>
      <InputTitle>{RECRUITER_REQUIREMENTS.selectTitle}</InputTitle>
      <Gap height={12} />
      <div className={styles.container}>
        <Select
          options={recruitCountOptions}
          placeholder={RECRUITER_REQUIREMENTS.selectPlaceholder}
          inputName="recruitCount"
          handleStoreChange={setThirdResult}
          initialValue={thirdResult.recruitCount}
        />
        <Tooltip>{RECRUITER_REQUIREMENTS.tooltip}</Tooltip>
      </div>
      <Gap height={16} />
      <MultiSelect
        label={<InputTitle>{RECRUITER_REQUIREMENTS.multiTitle}</InputTitle>}
        placeholder={RECRUITER_REQUIREMENTS.multiPlaceholder}
        options={recruitTypeOptions}
        inputName="recruitType"
        handleStoreChange={setThirdResult}
      />
      <Gap height={32} />
      <Label
        text={RECRUITER_REQUIREMENTS.label}
        variant={label ? 'success' : 'info'}
        onClick={() => setLabel(prev => !prev)}
      />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {RECRUITER_REQUIREMENTS.labelDescription}
      </Text>
      <Gap height={12} />
      <Input
        icon
        placeholder={RECRUITER_REQUIREMENTS.additional}
        inputName="additionalRecruiterСonditions"
        handleStoreChange={setThirdResult}
        initialValue={thirdResult.additionalRecruiterСonditions}
      />
      {label && (
        <>
          <Gap height={16} />
          <Select
            label={RECRUITER_REQUIREMENTS.selectTitle2}
            placeholder={RECRUITER_REQUIREMENTS.selectPlaceholder2}
            options={experienceForRecruiterOptions}
            inputName="experienceForRecruiter"
            handleStoreChange={setThirdResult}
            initialValue={thirdResult.experienceForRecruiter}
          />
        </>
      )}
    </>
  );
}

export default RecruiterRequirements;
