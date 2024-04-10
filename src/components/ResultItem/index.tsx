import styles from './styles.module.scss';
import { Text } from '../../ui-kit';
import { RESULT_TITLE } from '../../utils/constans';

interface IResultItem {
  text: string | string[] | FileType[];
  name: string;
}

const ResultItem: React.FC<IResultItem> = ({ text, name }) => {
  const title = RESULT_TITLE[name as keyof typeof RESULT_TITLE];

  return (
    <div className={styles.resultItemContainer}>
      <Text>{title}</Text>
      <ul className={styles.resultItemContainer__list}>
        {Array.isArray(text) ? (
          text.map((item, index) =>
            typeof item === 'object' ? (
              <li key={index}>
                <Text color="grey50">{item.name}</Text>
              </li>
            ) : (
              <li key={index}>
                <Text color="grey50">{item}</Text>
              </li>
            ),
          )
        ) : (
          <li>
            <Text color="grey50">{text}</Text>
          </li>
        )}
        {/* {Array.isArray(text) ? (
          text.map((item, index) => (
            <li key={index}>
              <Text color="grey50">{item}</Text>
            </li>
          ))
        ) : (
          <li>
            <Text color="grey50">{text}</Text>
          </li>
        )} */}
      </ul>
    </div>
  );
};

export default ResultItem;
