import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from './Main.module.css';
import './Main.font.css';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <>
      <Nav className={styles.nav} />
      <Outlet />
      <Footer className={styles.footer} />
    </>
  );
}

export default Main;
