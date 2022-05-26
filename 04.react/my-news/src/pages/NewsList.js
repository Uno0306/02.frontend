import React from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import api from '../utils/api';
import { Link } from 'react-router-dom';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sample = {
//   title: '제목',
//   description: '내용',
//   url: 'https://www.google.com',
//   urlToImage: 'https://via.placeholder.com/160',
// };

function NewsList({ category, categoryValue }) {
  // an 1
  // const [articles, setArticles] = useState(null);
  //   console.log(category);
  const [articles, setArticles] = useState([]);
  const queryString =
    // an 1
    // category === 'all' || category === '' ? '' : `&category=${category}`;

    // an 2
    // category === ''
    //   ? `&category=${categoryValue}`
    //   : category === 'all'
    //   ? ''
    //   : `&category=${category}`;

    // an 3
    // category === ''
    //   ? categoryValue === '' || categoryValue === '/'
    //     ? ''
    //     : `&category=${categoryValue}`
    //   : category === 'all'
    //   ? ''
    //   : `&category=${category}`;

    category === '' || category === 'all' ? '' : `&category=${categoryValue}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          // `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${api}`
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${api}${queryString}`
        );
        // console.log(response.data);
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [category]);
  console.log(articles);

  return (
    <NewsListBlock>
      {/* <NewsItem article={articles}></NewsItem>
      <NewsItem article={articles}></NewsItem>
      <NewsItem article={articles}></NewsItem> */}
      {/* 
        // an 1
        {articles
        ? articles.map((article) => {
            // console.log(article);
            return <NewsItem key={article.url} article={article}></NewsItem>;
          })
        : ''} */}
      {/* 
        // an 2
        {articles.map((article) => {
        return <NewsItem key={article.url} article={article}></NewsItem>;
      })} */}
      {articles.map((article) => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
