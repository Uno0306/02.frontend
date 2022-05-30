import { addWishlist, getCourseBySlug } from '../api';
import Button from '../components/Button';
import Container from '../components/Container';
import Card from '../components/Card';
import CourseIcon from '../components/CourseIcon';
import getCourseColor from '../utils/getCourseColor';
import styles from './CoursePage.module.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function CoursePage() {
  const { courseSlug } = useParams();
  const course = getCourseBySlug(courseSlug);
  const courseColor = getCourseColor(course?.code);

  const [cnt, setCnt] = useState(0);
  const headerStyle = {
    borderTopColor: courseColor,
  };
  console.log(localStorage.getItem());
  //   localStorage.getItem(key) === courseSlug;

  const handleAddWishlistClick = () => {
    addWishlist(course?.slug);
    cnt === 0
      ? alert('강의가 추가되었습니다.')
      : alert('이미 추가된 강의입니다.');

    return setCnt(cnt + 1);
  };

  return (
    <>
      <div className={styles.header} style={headerStyle}>
        <Container className={styles.content}>
          <CourseIcon photoUrl={course.photoUrl} />
          <h1 className={styles.title}>{course.title}</h1>
          <Button variant='round' onClick={handleAddWishlistClick}>
            + Add WishList
          </Button>
          <p className={styles.summary}>{course.summary}</p>
        </Container>
      </div>
      <Container className={styles.topics}>
        {course.topics.map(({ topic }) => (
          <Card className={styles.topic} key={topic.slug}>
            <h3 className={styles.title}>{topic.title}</h3>
            <p className={styles.summary}>{topic.summary}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CoursePage;
