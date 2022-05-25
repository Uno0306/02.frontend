import React from 'react';
import styled from 'styled-components';
import categories from '../utils/categoriesArray';

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
  return (
    <CategoriesBlock>
      {categories.map((category) => (
        <Category
          key={category.name}
          onClick={() => {
            seletCategory(category.name);
          }}
        >
          {category.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
}

export default Categories;
