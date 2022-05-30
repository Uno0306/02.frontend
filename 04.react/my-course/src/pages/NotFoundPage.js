import Button from '../components/Button';
import Container from '../components/Container';
import Warn from '../components/Warn';
import styles from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';
function NotFoundPage() {
  return (
    <Container className={styles.container}>
      <Warn
        variant='big'
        title='Not Found Page'
        description='Please check your URL.'
      />
      <div className={styles.link}>
        <Link to='/'>
          <Button as='div'>Home</Button>
        </Link>
      </div>
    </Container>
  );
}

export default NotFoundPage;
