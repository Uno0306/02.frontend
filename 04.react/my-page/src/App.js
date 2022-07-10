import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const data = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(response.data);
    };
    data();
  }, []);

  // 현재 페이지
  // size
  // 총 데이터의 개수
  // 끝 페이지
  const lastPage = currentPage * postsPerPage;
  const firstPage = lastPage - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(firstPage, lastPage);
    return currentPosts;
  };

  return (
    <div className='App'>
      {/* <Posts posts={posts} /> */}
      <Posts posts={currentPosts(posts)} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
