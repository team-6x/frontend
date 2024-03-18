import styles from './styles.module.scss';
import { Text } from '../../ui-kit';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.copyright}>
          <a
            href="https://hrspace.hh.ru/"
            target="_blank"
            className={styles.link}
          >
            <Text color="white">
              Если остались вопросы, у нас уже готовы ответы в разделе «
              <span className={styles.span}>Вопрос - ответ</span>»
            </Text>
          </a>
          <Text color="grey60">
            {`© ${new Date().getFullYear()} Группа компаний HeadHunter`}
          </Text>
        </div>
        <div className={styles.contacts}>
          <div className={styles.title}>
            <Text color="white" weight="bold">
              Всегда поддержим и поможем:
            </Text>
          </div>
          <ul className={styles.ul}>
            <li>
              <Text color="white">по России 8 800 100-64-27</Text>
            </li>
            <li>
              <Text color="white">в Москве +7 495 974-64-27</Text>
            </li>
            <li>
              <Text color="white">в Санкт-Петербурге +7 812 458-45-45</Text>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
