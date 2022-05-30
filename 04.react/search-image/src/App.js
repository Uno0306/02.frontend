import styled from 'styled-components';
import SearchContainer from './component/SearchContainer';
import ResultContainer from './component/ResultContainer';
import './App.css';
import { useState, useEffect } from 'react';
import getImages from './api/getImages';

const Container = styled.div`
  position: relative;
  background-color: var(--primary);
  min-height: 100vh;
`;

function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const data = await getImages({ q: query });
      //   console.log(query);
      setData(data);
    };
    fetch();
  }, [query]);

  return (
    <>
      <Container>
        <SearchContainer setQuery={setQuery} />
        <ResultContainer data={data} />
      </Container>
    </>
  );
}
export default App;
