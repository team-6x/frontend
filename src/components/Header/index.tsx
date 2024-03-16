import styles from './styles.module.scss';
import Logo from '../Logo';
import { NavLink, Link } from 'react-router-dom';
import { Like, Bell } from '../../assets/icons';
import { CustomText } from '../../ui-kit';

function Header() {
  return (
    <header>
      <div className={styles.box}>
        <Logo color="red" />
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  Главная
                </NavLink>
              </li>
              <li>
                <Link to={'/'} className={styles.link}>
                  Мои&nbsp;заявки
                </Link>
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
            <Like className={styles.like} />
            <Bell className={styles.bell} />
            <div className={styles.profile__container}>
              <div className={styles.avatar} />
              <div className={styles.profile__text}>
                <CustomText
                  text="Анастасия Волошина"
                  size="16px"
                  weight="normal"
                />
                <CustomText
                  text="#67334"
                  size="14px"
                  weight="normal"
                  color="grey"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
