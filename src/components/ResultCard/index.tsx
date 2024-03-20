/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from '../../hooks/redux';
import { Card, Text } from '../../ui-kit';
import ResultItem from '../ResultItem';
import styles from './styles.module.scss';

export default function ResultCard() {
  const results = useAppSelector(state => state.results);

  return (
    <div className={styles.resultCardContainer}>
      <Text weight="bold" size="16px">
        Информация о вакансии
      </Text>
      <Card preview>
        <div className={styles.resultCardContainer__item}>
          {results &&
            Object.entries(results).map(([key, value]) => {
              if (value === '' || value.length === 1) {
                return null;
              }
              return <ResultItem text={value} key={key} name={key} />;
            })}
        </div>
      </Card>
    </div>
  );
}
