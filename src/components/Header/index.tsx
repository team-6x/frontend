import styles from './styles.module.scss';
import Logo from '../Logo';
import { NavLink, Link } from 'react-router-dom';
import { Like, Bell } from '../../assets/icons';
import { Text } from '../../ui-kit';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <Logo color="red" />
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
              <div className={styles.avatar} />
              <div className={styles.profile__text}>
                <Text size="16px" weight="normal">
                  Анастасия Волошина
                </Text>
                <Text size="14px" weight="normal" color="grey50">
                  #67334
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
