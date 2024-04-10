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

const JobDescription: React.FC = () => {
  const { firstStep } = useAppSelector(state => state.inputsForm);
  const actions = useActions();
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
          state={firstStep.vacancyName}
          setState={actions.setVacancyName}
        />
        <Tooltip>{JOB_DESCRIPTION.tooltip}</Tooltip>
      </div>
      <Gap height={16} />
      <MultiSelect
        placeholder={JOB_DESCRIPTION.multiPlaceholder}
        label={<TextWithAsterisk children={JOB_DESCRIPTION.multiTitle} />}
        options={industriesOptions}
        state={firstStep.industry}
        setState={actions.setIndustry}
      />
      <Gap height={16} />
      <TextArea
        placeholder={JOB_DESCRIPTION.additional}
        inputState={firstStep.additionalInfo}
        setInputState={actions.setAdditionalInfo}
        chipsState={firstStep.additionalInfoResult}
        setChipsState={actions.setAdditionalInfoResult}
      />
    </>
  );
};

export default JobDescription;
