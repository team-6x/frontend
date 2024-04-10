import { Card, Text } from '../../ui-kit';
import ResultItem from '../ResultItem';
import styles from './styles.module.scss';

type ResultsType = [string, string | string[] | FileType[]][];

interface IResultCard {
  results: ResultsType;
  title: string;
}

const filteredResults = (results: ResultsType) =>
  results.map(([key, value]) =>
    key === 'additionalInfo' ||
    key === 'responsibilities' ||
    key === 'additionalRequirements' ||
    key === 'additionalWorkConditions' ||
    key === 'additionalInfo2' ||
    key === 'banned' ||
    key === 'test' ||
    key === 'additionalRecruiterRequirements' ||
    key === 'additionalRecruiterConditions' ||
    key === 'security' ||
    !value ||
    value.length === 0 ? null : (
      <ResultItem text={value} key={key} name={key} />
    ),
  );

const ResultCard: React.FC<IResultCard> = ({ results, title }) => {
  return (
    <div className={styles.resultCardContainer}>
      <Text weight="bold" size="16px" style={{ alignSelf: 'center' }}>
        {title}
      </Text>
      <Card preview>
        <div className={styles.resultCardContainer__item}>
          {results.length > 0 && filteredResults(results)}
        </div>
      </Card>
    </div>
  );
};

export default ResultCard;
