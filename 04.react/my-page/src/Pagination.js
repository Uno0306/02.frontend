import React, { useState } from 'react';
import styled from 'styled-components';

const PaginationUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const PaginationLi = styled.li`
  padding: 5px;
  font-size: 32px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    color: green;
    background: orange;
  }
`;

// color: ${(props) => props.color};

// ${({ selected }) => {
//   return selected ? `background:red` : null;
// }}
const PaginationSpan = styled.span`
  &[aria-current] {
    background-color: black;
    color: white;
  }
`;

const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) => {
  const [check, setCheck] = useState(false);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const selectCheck = (number, currentPage) => {
    const id = document.getElementById('span' + number);
    const span = `span${number}`;
    if (id.id == span) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  return (
    <div>
      <div>
        <PaginationUl>
          {pageNumbers.map((number) => (
            <PaginationLi key={number}>
              <PaginationSpan
                // color={color}
                id={'span' + number}
                selected={check}
                onClick={() => {
                  setCurrentPage(number);
                  selectCheck(number, currentPage);
                }}
                aria-current={currentPage === number ? 'page' : null}
              >
                {number}
              </PaginationSpan>
            </PaginationLi>
          ))}
        </PaginationUl>
      </div>
    </div>
  );
};

export default Pagination;
