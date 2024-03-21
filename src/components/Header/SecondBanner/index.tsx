import styles from './styles.module.scss';
import { Text, StarIcon } from '../../../ui-kit';

function SecondBanner() {
  return (
    <div className={styles.secondBanner__box}>
      <h1 className={styles.title}>Четыре шага до нового сотрудника</h1>
      <ul className={styles.cards}>
        <li className={styles.card}>
          <h2 className={styles.card__title}>1</h2>
          <Text size="20px" weight="bold" color="grey80">
            Заполните информацию о вакансии
          </Text>
        </li>
        <li className={styles.card}>
          <h2 className={styles.card__title}>2</h2>
          <Text size="20px" weight="bold" color="grey80">
            Выберите подходящие условия оплаты
          </Text>
        </li>
        <li className={styles.card}>
          <h2 className={styles.card__title}>3</h2>
          <Text size="20px" weight="bold" color="grey80">
            Укажите условия сотрудничества с рекрутером
          </Text>
        </li>
        <li className={styles.card}>
          <h2 className={styles.card__title}>4</h2>
          <Text size="20px" weight="bold" color="grey80">
            Оплатите размещение заявки
          </Text>
        </li>
      </ul>
      <div className={`${styles.icon} ${styles.icon__lilac}`}>
        <StarIcon />
      </div>
      <div className={`${styles.icon} ${styles.icon__minty}`}>
        <StarIcon color="minty" />
      </div>
    </div>
  );
}

export default SecondBanner;
