import requests from './requests';
import pixabay from '../asset/URL';
// import sky from '../asset/URL';
// import spring from '../asset/URL';
import api from './api';

const getImages = async () => {
  //   const apidata = `/?key=${api}`;
  // const data = await requests(`${pixabay}${apidata}&q=sky`);
  //   console.log(sky.sky);
  //   const skydata = sky.sky;
  //   const springdata = spring.spring;
  const springdata = `${pixabay}/?q=sping`;
  const skydata = `${pixabay}/?q=sky`;
  const apidata = `&key=${api}`;
  const data = await requests(`${skydata}${apidata}`);
  return data;
};

export default getImages;
