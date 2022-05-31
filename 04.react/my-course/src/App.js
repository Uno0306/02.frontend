import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import CourseListPage from './pages/CourseListPage';
import WishlistPage from './pages/WishlistPage';
import Main from './components/Main';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<HomePage />} />
          {/*  */}
          <Route path='/courses/'>
            <Route index element={<CourseListPage />} />
            {/*  */}
            <Route path=':courseSlug' element={<Cour sePage />} />
          </Route>
          {/*  */}
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
