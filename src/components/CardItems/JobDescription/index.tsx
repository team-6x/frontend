import styles from './styles.module.scss';
import InputTitle from '../InputTitle';
import { Input, Tooltip, Gap, MultiSelect } from '../../../ui-kit';
import { JOB_DESCRIPTION } from '../../../utils/constans';

const options = [{ name: 'Сфера деятельности', id: 1 }];

function JobDescription() {
  return (
    <>
      <InputTitle>{JOB_DESCRIPTION.inputTitle}</InputTitle>
      <Gap height={12} />
      <div className={styles.container}>
        <Input placeholder={JOB_DESCRIPTION.inputPlaceholder} />
        <Tooltip>{JOB_DESCRIPTION.tooltip}</Tooltip>
      </div>
      <Gap height={16} />
      <MultiSelect
        label={<InputTitle>{JOB_DESCRIPTION.multiTitle}</InputTitle>}
        placeholder={JOB_DESCRIPTION.multiPlaceholder}
        options={options}
      />
      <Gap height={16} />
      <Input icon placeholder={JOB_DESCRIPTION.additional} />
    </>
  );
}

export default JobDescription;
