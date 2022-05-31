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
  //   console.log(course.title);
  //   console.log(window.localStorage.length);
  //   console.log(window.localStorage);
  //   console.log(window.localStorage.getItem('course-wishlist'));
  //   console.log(JSON.parse(window.localStorage.getItem('course-wishlist')));
  const dname = course.slug;
  //   console.log(JSON.parse(window.localStorage.getItem('course-wishlist')));
  console.log(JSON.parse(window.localStorage.getItem('course-wishlist')));
  //   const ddd = JSON.parse(window.localStorage.getItem('course-wishlist')).map(
  //     (idx) => console.log(window.localStorage.key(idx))
  //   );
  //   console.log(ddd);
  const addr = JSON.parse(window.localStorage.getItem('course-wishlist'));
  console.log(Object.keys(addr)[0]);
  Object.keys(addr).map((idx) => {
    Object.keys(addr)[idx] === course.slug
      ? console.log(Object.keys(addr)[idx])
      : console.log('ds');
  });
  //   console.log(dname);
  //   console.log(addr.`css-basic);
  //   console.log(window.localStorage.key(0));

  //   for (
  //     let i = 0;
  //     i < JSON.parse(window.localStorage.getItem('course-wishlist')).length;
  //     i++
  //   ) {
  //     console.log(window.localStorage.key(i));
  //   }
  //   //   localStorage.getItem(key) === courseSlug;
  //   const cnst = 0;

  //   const ard = addr.fetch((title) => {
  //     title === course.title ? cnst + 1 : cnst;
  //     return cnst;
  //   });

  const handleAddWishlistClick = () => {
    addWishlist(course.slug);
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
