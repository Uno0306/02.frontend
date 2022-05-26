import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import getCategoryData from '../api/getCategoryData';
import { useState } from 'react';
import { useEffect } from 'react';

// getCategoryData().then((data) => data);

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  overflow: scroll;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }
`;

function Categories({ seletCategory }) {
  const [categories, setCategories] = useState([]);
  const getCategory = async () => {
    const data = await getCategoryData();

    setCategories(data);
    // console.log(categories);
    // console.log(data);
  };
  // setCategories(getCategory);

  useEffect(() => {
    getCategory();
  }, []);

  console.log(categories);
  return (
    <CategoriesBlock>
      {categories.map((category) => (
        <Category
          key={category.name}
          onClick={() => {
            seletCategory(category.name);
          }}
        >
          {/* {category.name === 'all' ? '' : category.name} */}
          <Link to={`/${category.name === 'all' ? '' : category.name}`}>
            {category.text}
          </Link>
        </Category>
      ))}
    </CategoriesBlock>
  );
}

export default Categories;
