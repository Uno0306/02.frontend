import { useEffect, useState } from 'react';
import styled from 'styled-components';
import getImages from '../api/getImages';
// import DummyData from '../asset/dummyData';
// import api from '../api/api';
import ImageCard from './ImageCard';
import NotFoundResult from './NotFoundResult';

const Container = styled.div`
  max-width: 1600px;
  margin: 8px auto;
  padding-right: 8px;
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const ResultContainer = () => {
  //   const data = DummyData;
  const [data, setData] = useState({});
  useEffect(() => {
    const fetch = async () => {
      const data = await getImages();
      setData(data);
    };
    fetch();
  }, []);

  return (
    <Container>
      <ResultsWrapper>
        {data.hits?.map((imgData) => (
          <ImageCard key={imgData.id} imgData={imgData} />
        ))}
        <NotFoundResult />
      </ResultsWrapper>
    </Container>
  );
};

export default ResultContainer;
