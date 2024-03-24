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

const options = [{ name: 'Сфера деятельности', id: 1 }];
const labelState = true;

function RecruiterRequirements() {
  return (
    <>
      <InputTitle>{RECRUITER_REQUIREMENTS.selectTitle}</InputTitle>
      <Gap height={12} />
      <div className={styles.container}>
        <Select
          options={options}
          placeholder={RECRUITER_REQUIREMENTS.selectPlaceholder}
        />
        <Tooltip>{RECRUITER_REQUIREMENTS.tooltip}</Tooltip>
      </div>
      <Gap height={16} />
      <MultiSelect
        label={<InputTitle>{RECRUITER_REQUIREMENTS.multiTitle}</InputTitle>}
        placeholder={RECRUITER_REQUIREMENTS.multiPlaceholder}
        options={options}
      />
      <Gap height={32} />
      <Label text={RECRUITER_REQUIREMENTS.label} variant="success" />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {RECRUITER_REQUIREMENTS.labelDescription}
      </Text>
      <Gap height={12} />
      <Input icon placeholder={RECRUITER_REQUIREMENTS.additional} />
      {labelState && (
        <>
          <Gap height={16} />
          <Select
            label={RECRUITER_REQUIREMENTS.selectTitle2}
            placeholder={RECRUITER_REQUIREMENTS.selectPlaceholder2}
            options={options}
          />
        </>
      )}
    </>
  );
}

export default RecruiterRequirements;
