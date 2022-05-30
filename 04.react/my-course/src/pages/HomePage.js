import Button from '../components/Button';
import Container from '../components/Container';
import styles from './HomePage.module.css';
import lectureImg from '../assets/lecture.png';

function HomePage() {
  return (
    <>
      <div className={styles.bg} />
      <Container className={styles.container}>
        <div className={styles.texts}>
          <h1 className={styles.heading}>
            <span className={styles.lined}>프로그래밍 학습을 시작합니다</span>
            <br />
            <strong>Lecture</strong>
          </h1>
          <p className={styles.description}>재미있고, 즐거운 프로그래밍 학습</p>
          <div>
            <Button>Let's Study</Button>
          </div>
        </div>
        <div className={styles.figure}>
          <img src={lectureImg} alt='lecture' />
        </div>
      </Container>
    </>
  );
}

export default HomePage;
