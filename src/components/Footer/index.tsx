import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <ul className={styles.footer__contacts}>
          <li>
            <a className={styles.link} href="tel:+74959746427">
              Москва и область
              <span className={styles.footer__span}>+7 495 974-64-27</span>
            </a>
          </li>
          <li>
            <a className={styles.link} href="tel:+78124584545">
              Санкт-Петербург и область
              <span className={styles.footer__span}>+7 812 458-45-45</span>
            </a>
          </li>
          <li>
            <a className={styles.link} href="tel:+88001006427">
              Регионы
              <span className={styles.footer__span}>8 800 100-64-27</span>
            </a>
          </li>
          <li>
            <a className={styles.link} href="mailto:hrspace@hh.ru">
              hrspace@hh.ru
            </a>
          </li>
        </ul>
        <div className={styles.container}>
          <Link to={'/'}>
            <div className={styles.logo}></div>
          </Link>
          <div>
            <p className={styles.link}>
              <span className={styles.footer__span}>
                © {new Date().getFullYear()} Группа компаний HeadHunter
              </span>
            </p>
          </div>
          <div className={styles.socials}>
            <a href="https://hrspace.hh.ru/" className={styles.social__link}>
              <div className={styles.tg} />
            </a>
            <a href="https://hrspace.hh.ru/" className={styles.social__link}>
              <div className={styles.vk} />
            </a>
            <a href="https://hrspace.hh.ru/" className={styles.social__link}>
              <div className={styles.ok} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
