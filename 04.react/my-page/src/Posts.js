import React from 'react';

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id} - {post.title}
        </li>
      ))}
    </>
  );
};

export default Posts;
