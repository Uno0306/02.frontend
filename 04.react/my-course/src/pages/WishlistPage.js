import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteWishlist, getWishlist } from '../api';
import Button from '../components/Button';
import Container from '../components/Container';
import CourseItem from '../components/CourseItem';
import Warn from '../components/Warn';
import closeButton from '../assets/closeButton.svg';
import styles from './WishlistPage.module.css';

function WishlistPage() {
  const [courses, setCourses] = useState([]);

  //
  const handleDelete = (coursesSlug) => {
    deleteWishlist(coursesSlug);
    const nextCourses = getWishlist();
    setCourses(nextCourses);
  };

  //
  useEffect(() => {
    const nextCourses = getWishlist();
    setCourses(nextCourses);
  }, []);

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>My WishList</h1>
      {courses.length === 0 ? (
        <>
          <Warn
            className={styles.emptyList}
            title='Empty WishList'
            description='Search Courses'
          />
          <div className={styles.link}>
            {/*  */}
            <Link to='/courses'>
              <Button as='div'>Move to Courses Page</Button>
            </Link>
          </div>
        </>
      ) : (
        <ul className={styles.items}>
          {courses.map((course) => (
            <li key={course.slug} className={styles.item}>
              <CourseItem course={course} />
              <img
                className={styles.delete}
                src={closeButton}
                alt='close'
                //
                onClick={() => handleDelete(course.slug)}
              />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default WishlistPage;
