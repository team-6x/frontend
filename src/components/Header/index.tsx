import styles from './styles.module.scss';
import Logo from '../Logo';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className={styles.box}>
        <div className={styles.container}>
          <div>
            <Logo />
          </div>
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
                  Мои заявки
                </Link>
              </li>
              <li>
                <Link to={'/'} className={styles.link}>
                  Поиск по рынку
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
            <div className={styles.like} />
            <div className={styles.bell} />
            <div className={styles.profile__container}>
              <div className={styles.avatar} />
              <div>
                <h2 className={styles.username}>Анастасия Волошина</h2>
                <p className={styles.id}>#67334</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
