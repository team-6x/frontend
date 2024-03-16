import styles from './styles.module.scss';
import Logo from '../Logo';
import { Telegram, Vk, Ok } from '../../assets/icons';
import { Text } from '../../ui-kit';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <ul className={styles.footer__contacts}>
          <li>
            <a className={styles.link} href="tel:+74959746427">
              <Text size="14px">Москва и область</Text>
              <Text size="14px" color="grey">
                +7 495 974-64-27
              </Text>
            </a>
          </li>
          <li>
            <a className={styles.link} href="tel:+78124584545">
              <Text size="14px">Санкт-Петербург и область</Text>
              <Text size="14px" color="grey">
                +7 812 458-45-45
              </Text>
            </a>
          </li>
          <li>
            <a className={styles.link} href="tel:+88001006427">
              <Text size="14px">Регионы</Text>
              <Text size="14px" color="grey">
                +7 800 100-64-27
              </Text>
            </a>
          </li>
          <li>
            <a className={styles.link} href="mailto:hrspace@hh.ru">
              <Text size="14px">hrspace@hh.ru</Text>
            </a>
          </li>
        </ul>
        <div className={styles.container}>
          <Logo />
          <Text size="14px" color="grey">
            {`© ${new Date().getFullYear()} Группа компаний HeadHunter`}
          </Text>
          <div className={styles.socials}>
            <a href="https://hrspace.hh.ru/" className={styles.social__link}>
              <Telegram />
            </a>
            <a href="https://hrspace.hh.ru/" className={styles.social__link}>
              <Vk />
            </a>
            <a href="https://hrspace.hh.ru/" className={styles.social__link}>
              <Ok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
