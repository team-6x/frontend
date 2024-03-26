import styles from './styles.module.scss';
import SecondBanner from './SecondBanner';
import { NavLink, Link } from 'react-router-dom';
import { Like, Bell, LogoIcon } from '../../assets/icons';
import { Text } from '../../ui-kit';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__box}>
        <Link style={{ width: '124px', height: '36px' }} to={'/'}>
          <LogoIcon />
        </Link>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li>
                <Link to={'/'} className={styles.link}>
                  Главная
                </Link>
              </li>
              <li>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.link} ${styles.link_active}`
                      : styles.link
                  }
                >
                  Мои&nbsp;заявки
                </NavLink>
              </li>
              <li>
                <Link to={'/'} className={styles.link}>
                  Поиск&nbsp;по&nbsp;рынку
                </Link>
              </li>
              <li>
                <Link to={'/'} className={styles.link}>
                  Счёт
                </Link>
              </li>
              <li>
                <Link to={'/'} className={styles.link}>
                  Помощь
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.profile}>
            <Like className={styles.icon} />
            <Bell className={styles.icon} />
            <div className={styles.profile__container}>
              <div className={styles.avatar}>
                <Text color="white" weight="bold">
                  ВК
                </Text>
              </div>
              <div className={styles.profile__text}>
                <Text size="16px" weight="normal">
                  Виталий Крымов
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SecondBanner />
    </header>
  );
}

export default Header;
