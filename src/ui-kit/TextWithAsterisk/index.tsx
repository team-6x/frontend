import styles from './styles.module.scss';
import { Text } from '..';

interface ITextWithAsterisk {
  children: string;
  asterisk?: boolean;
}

const TextWithAsterisk: React.FC<ITextWithAsterisk> = ({
  children,
  asterisk = true,
}) => {
  return (
    <>
      <Text weight="bold" color="grey80">
        {children}
        {asterisk && <span className={styles.asterisk}>&nbsp;*</span>}
      </Text>
    </>
  );
};

export default TextWithAsterisk;
