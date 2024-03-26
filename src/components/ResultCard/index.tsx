/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Text } from '../../ui-kit';
import ResultItem from '../ResultItem';
import styles from './styles.module.scss';

export default function ResultCard({
  results,
  title,
}: {
  results: any;
  title: string;
}) {
  return (
    <div className={styles.resultCardContainer}>
      <Text weight="bold" size="16px" style={{ alignSelf: 'center' }}>
        {title}
      </Text>
      <Card preview>
        <div className={styles.resultCardContainer__item}>
          {results &&
            Object.entries(results).map(entry => {
              const [key, value] = entry;
              if (
                value === '' ||
                (Array.isArray(value) && value.length === 1)
              ) {
                return null;
              }
              return (
                typeof value === 'string' && (
                  <ResultItem text={value} key={key} name={key} />
                )
              );
            })}
        </div>
      </Card>
    </div>
  );
}
