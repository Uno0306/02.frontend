import Card from './Card';
import CourseIcon from './CourseIcon';
import getCourseColor from '../utils/getCourseColor';
import styles from './CourseItem.module.css';
import { Link } from 'react-router-dom';

function CourseItem({ course }) {
  const showSummary = course.summary && course.title !== course.summary;
  const courseColor = getCourseColor(course.code);
  const thumbStyle = {
    borderColor: courseColor,
  };

  return (
    <Card className={styles.courseItem}>
      <div className={styles.thumb} style={thumbStyle}>
        <CourseIcon photoUrl={course.photoUrl} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          {/*  */}
          <Link to={'/courses/' + course.slug} course={course}>
            {course.title}
          </Link>
        </h2>
        <p className={styles.description}>{showSummary && course.summary}</p>
      </div>
    </Card>
  );
}

export default CourseItem;
