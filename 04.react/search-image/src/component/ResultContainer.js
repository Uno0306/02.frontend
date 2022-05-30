import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import getImages from '../api/getImages';
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

const ResultContainer = ({ data }) => {
  //   const data = DummyData;
  // console.log(data);
  const total = 0;
  return (
    <Container>
      <ResultsWrapper>
        {/* {data.hits && data.hits.length === 0 ? (
          <NotFoundResult />
        ) : (
          data.hits?.map((imgData) => (
            <ImageCard key={imgData.id} imgData={imgData} />
          ))
        )} */}

        {/* {data.hits?.map((imgData) => (
          <ImageCard key={imgData.id} imgData={imgData} />
        ))} */}

        {/* {(data !== 0 &&
          data.hits?.map((imgData) => (
            <ImageCard key={imgData.id} imgData={imgData} />
          ))) <NotFoundResult />} */}

        {/* {data.hits && data.hits.length !== 0 ? (
          data.hits.map((imgData) => (
            <ImageCard key={imgData.id} imgData={imgData} />
          ))
        ) : (
          <NotFoundResult />
        )} */}

        {data.hits?.length > 0 ? (
          data.hits.map((imgData) => (
            <ImageCard key={imgData.id} imgData={imgData} />
          ))
        ) : (
          <NotFoundResult />
        )}
      </ResultsWrapper>
    </Container>
  );
};

export default ResultContainer;
