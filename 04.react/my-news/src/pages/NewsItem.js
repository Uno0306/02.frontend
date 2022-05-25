import React from 'react';
import styled from 'styled-components';
// an img2
// import cat from '../assests/cat.jpg';

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;

    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;

      a {
        color: #000;
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;

function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      <div className={'thumbnail'}>
        <a href={url} target='_blank' rel='noreferrer'>
          {/* {console.log(urlToImage)} */}
          <img src={urlToImage} alt={'Unable to load thumbnail'}></img>
          {/*
            an img1
          {try {
            <img src={urlToImage} alt={'thumbnail'}></img>
            
          } catch (error) {
            <img src="../assets/cat.png" alt={'thumbnail'}></img>
            
          }} */}
          {/* an img2
            <img src={cat} alt={'Unable to load thumbnail'}></img> */}
        </a>
      </div>

      <div className={'contents'}>
        <h2>
          <a href={url} target='_blank' rel='noreferrer'>
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
}

export default NewsItem;
