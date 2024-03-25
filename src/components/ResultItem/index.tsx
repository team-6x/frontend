/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text } from '../../ui-kit';
import { RESULT_TITLE } from '../../utils/constans';

import styles from './styles.module.scss';

export default function ResultItem({
  text,
  name,
}: {
  text: string | string[];
  name: string;
}) {
  const title = RESULT_TITLE[name as keyof typeof RESULT_TITLE];

  return (
    <div className={styles.resultItemContainer}>
      <Text>{title}</Text>
      <ul className={styles.resultItemContainer__list}>
        {Array.isArray(text) ? (
          text.map((item, index) => (
            <li key={index}>
              <Text color="grey50">{item}</Text>
            </li>
          ))
        ) : (
          <li>
            <Text color="grey50">{text}</Text>
          </li>
        )}
      </ul>
    </div>
  );
}
