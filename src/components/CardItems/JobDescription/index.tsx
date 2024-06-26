import styles from './styles.module.scss';
import InputTitle from '../InputTitle';
import { Input, Tooltip, Gap, MultiSelect, SearchInput } from '../../../ui-kit';
import { JOB_DESCRIPTION } from '../../../utils/constans';
import { useActions } from '../../../hooks/actions';
import {
  useGetIndustriesQuery,
  useLazyGetVacancyNamesQuery,
} from '../../../store/hrSpace/hh.api';

//

function JobDescription() {
  const { data: options } = useGetIndustriesQuery();
  const [getVacancyNames, { data: names }] = useLazyGetVacancyNamesQuery();
  const { setFirstResult } = useActions();

  const handleSearch = (value: string) => {
    getVacancyNames({ text: value });
  };

  return (
    <>
      <InputTitle>{JOB_DESCRIPTION.inputTitle}</InputTitle>
      <Gap height={12} />
      <div className={styles.container}>
        {/* <Input
          placeholder={JOB_DESCRIPTION.inputPlaceholder}
          handleStoreChange={setFirstResult}
          inputName="vacancyName"
        /> */}

        <SearchInput
          options={names?.items}
          handleStoreChange={setFirstResult}
          onSearch={handleSearch}
          placeholder={JOB_DESCRIPTION.inputPlaceholder}
          inputName="vacancyName"
        />

        <Tooltip>{JOB_DESCRIPTION.tooltip}</Tooltip>
      </div>
      <Gap height={16} />
      {options && (
        <MultiSelect
          label={<InputTitle>{JOB_DESCRIPTION.multiTitle}</InputTitle>}
          placeholder={JOB_DESCRIPTION.multiPlaceholder}
          options={options.map((item: Industry) => ({
            name: item.name,
            id: item.id,
          }))}
          handleStoreChange={setFirstResult}
          inputName="industry"
        />
      )}
      <Gap height={16} />
      <Input
        icon
        placeholder={JOB_DESCRIPTION.additional}
        handleStoreChange={setFirstResult}
        inputName="additionalInfo"
      />
    </>
  );
}

export default JobDescription;
