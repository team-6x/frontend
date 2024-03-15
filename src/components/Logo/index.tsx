import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={'/'}>
      <div className={styles.logo}></div>
    </Link>
  );
}

export default Logo;
