import styles from './styles.module.scss';
import {
  TextArea,
  Tooltip,
  Gap,
  MultiSelect,
  SearchInput,
  TextWithAsterisk,
} from '../../../ui-kit';
import { JOB_DESCRIPTION } from '../../../utils/constans';
import { useActions, useAppSelector } from '../../../hooks/useActions';
import {
  useGetIndustriesQuery,
  useLazyGetVacancysQuery,
} from '../../../store/hrSpace/hh.api';

function JobDescription() {
  const { vacancyName, industry, additionalInfo, additionalInfoResult } =
    useAppSelector(state => state.inputsForm.firstStep);
  const {
    setVacancyName,
    setIndustry,
    setAdditionalInfo,
    setAdditionalInfoResult,
  } = useActions();
  const { data: industriesOptions } = useGetIndustriesQuery();
  const [getVacancys, { data: vacancysOptions }] = useLazyGetVacancysQuery();

  return (
    <>
      <TextWithAsterisk children={JOB_DESCRIPTION.inputTitle} />
      <Gap height={12} />
      <div className={styles.container}>
        <SearchInput
          placeholder={JOB_DESCRIPTION.inputPlaceholder}
          options={vacancysOptions?.items}
          onSearch={getVacancys}
          state={vacancyName}
          setState={setVacancyName}
        />
        <Tooltip>{JOB_DESCRIPTION.tooltip}</Tooltip>
      </div>
      <Gap height={16} />
      <MultiSelect
        placeholder={JOB_DESCRIPTION.multiPlaceholder}
        label={<TextWithAsterisk children={JOB_DESCRIPTION.multiTitle} />}
        options={industriesOptions}
        state={industry}
        setState={setIndustry}
      />
      <Gap height={16} />
      <TextArea
        placeholder={JOB_DESCRIPTION.additional}
        inputState={additionalInfo}
        setInputState={setAdditionalInfo}
        chipsState={additionalInfoResult}
        setChipsState={setAdditionalInfoResult}
      />
    </>
  );
}

export default JobDescription;
