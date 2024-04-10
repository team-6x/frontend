import styles from './styles.module.scss';
import { Checkbox, Text, Button } from '../../ui-kit';
import { useAppSelector } from '../../hooks/useActions';

function Offer() {
  const results = useAppSelector(state => state.inputsForm);

  const link = (
    <Text>
      Я принимаю условия «
      <a href="https://hrspace.hh.ru/" target="_blank" className={styles.link}>
        <span>
          Оферты на заключение договора об использовании веб-сервиса HRspace
        </span>
      </a>
      »
    </Text>
  );

  return (
    <section className={styles.offer}>
      <Checkbox label={link} />
      <div className={styles.box}>
        <Button view="filled" onClick={() => alert(JSON.stringify(results))}>
          Опубликовать и перейти к оплате
        </Button>
        <Button view="flat">Сохранить как черновик</Button>
      </div>
    </section>
  );
}

export default Offer;
