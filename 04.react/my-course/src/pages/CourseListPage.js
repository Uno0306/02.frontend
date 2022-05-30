import { useState } from 'react';
import ListPage from '../components/ListPage';
import Warn from '../components/Warn';
import CourseItem from '../components/CourseItem';
import { getCourses } from '../api';
import styles from './CourseListPage.module.css';
import searchBarStyles from '../components/SearchBar.module.css';
import searchIcon from '../assets/search.svg';
import { useSearchParams } from 'react-router-dom';

function CourseListPage() {
  const [keyword, setKeyword] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const initialKeyword = searchParams.get('keyword');
  const courses = getCourses(initialKeyword || '');

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(
      keyword
        ? {
            keyword: keyword,
          }
        : {}
    );
  };

  return (
    <ListPage variant='catalog' title='Programming Courses'>
      {/*  */}
      <form className={searchBarStyles.form} onSubmit={handleSubmit}>
        <input
          name='keyword'
          onChange={handleKeywordChange}
          value={keyword}
          placeholder='search courses'
        />
        <button type='submit'>
          <img src={searchIcon} alt='search' />
        </button>
      </form>

      <p className={styles.count}>Total {courses.length} courses</p>
      {/*  */}
      {courses.length === 0 ? (
        <Warn
          className={styles.emptyList}
          title='Empty Courses'
          description='Please check your search keyword.'
        />
      ) : (
        <div className={styles.courseList}>
          {courses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      )}
    </ListPage>
  );
}

export default CourseListPage;
