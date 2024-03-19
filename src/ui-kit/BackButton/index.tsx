import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { Text, LeftArrowIcon } from '..';

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className={styles.button}
      type="button"
    >
      <LeftArrowIcon color="blue" />
      <Text color="blue">Назад</Text>
    </button>
  );
}

export default BackButton;
