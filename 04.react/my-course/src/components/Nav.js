import { Link } from 'react-router-dom';
import Container from './Container';
import UserMenu from './UserMenu';
import logoImg from '../assets/coding.png';
import styles from './Nav.module.css';

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        {/*  */}
        <Link to='/'>
          <img src={logoImg} alt='Home Logo' />
          &nbsp; Home
        </Link>
        <ul className={styles.menu}>
          <li>
            {/*  */}
            <Link to='/courses'>courses</Link>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
