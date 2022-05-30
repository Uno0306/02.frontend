import requests from './requests';
// import pixabay from '../asset/URL';
// import sky from '../asset/URL';
// import spring from '../asset/URL';
import API_KEY from './api';

const BASE_URL = 'https://pixabay.com/api/';

const defaultParams = {
  key: API_KEY,
};

// const test = {
//   q: 'spring',
// };

const getImages = async (paramObj) => {
  //   const apidata = `/?key=${api}`;
  // const data = await requests(`${pixabay}${apidata}&q=sky`);
  //   console.log(sky.sky);
  //   const skydata = sky.sky;
  //   const springdata = spring.spring;
  // const springdata = `${pixabay}/?q=sping`;
  // const skydata = `${pixabay}/?q=sky`;
  // const apidata = `&key=${api}`;
  const params = new URLSearchParams({
    ...defaultParams,
    ...paramObj,
  }).toString();

  // const data = await requests(`${BASE_URL}?key=${API_KEY}&q=sky`);
  const data = await requests(`${BASE_URL}?${params}`);
  return data;
};

export default getImages;
