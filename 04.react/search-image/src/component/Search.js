import { useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../asset/search.svg';
import SearchTag from './SearchTag';

const SearchTagContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  justify-content: center;
`;

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding: 4px 16px;
  width: 100%;
  align-items: center;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

const SearchInputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const SearchInput = styled.input`
  background: transparent;
  font-size: 16px;
  outline: none;
  color: #5e5e5e;
  border: none;
  flex: auto;
  margin-left: 8px;
`;

const Search = ({ setQuery }) => {
  const inputRef = useRef(null);

  const onSearch = (event) => {
    if (event.key === 'Enter') {
      //   console.log(event.target.value);
      const currentValue = event.target.value;
      setQuery(currentValue);
      inputRef.current.value = '';
      // console.log(inputRef);
    }
  };

  return (
    <>
      <SearchBoxContainer>
        <SearchInputContainer>
          <SearchIcon width='24' fill='#5e5e5e' />
          <SearchInput
            ref={inputRef}
            placeholder='검색 후 ENTER'
            onKeyDown={onSearch}
          />
        </SearchInputContainer>
      </SearchBoxContainer>
      <SearchTagContainer>
        <SearchTag />
      </SearchTagContainer>
    </>
  );
};

export default Search;
