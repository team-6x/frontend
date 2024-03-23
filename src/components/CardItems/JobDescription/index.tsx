import styles from './styles.module.scss';
import { Input, Text, Tooltip, Gap, MultiSelect } from '../../../ui-kit';
import { JOB_DESCRIPTION } from '../../../utils/constans';

const options = [{ name: 'Сфера деятельности', id: 1 }];

function JobDescription() {
  return (
    <>
      <Text weight="bold" color="grey80">
        {JOB_DESCRIPTION.title}
        <span style={{ color: 'var(--color-special-red-brended)' }}>
          &nbsp;*
        </span>
      </Text>
      <Gap height={12} />
      <div className={styles.container}>
        <Input placeholder={JOB_DESCRIPTION.inputPlaceholder} />
        <Tooltip>{JOB_DESCRIPTION.tooltip}</Tooltip>
      </div>
      <Gap height={16} />
      <MultiSelect
        label={
          <Text weight="bold" color="grey80">
            {JOB_DESCRIPTION.multiTitle}
            <span style={{ color: 'var(--color-special-red-brended)' }}>
              &nbsp;*
            </span>
          </Text>
        }
        placeholder={JOB_DESCRIPTION.multiPlaceholder}
        options={options}
      />
      <Gap height={16} />
      <Input icon placeholder={JOB_DESCRIPTION.additional} />
    </>
  );
}

export default JobDescription;
