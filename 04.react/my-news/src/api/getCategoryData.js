// const getCategoryData = () =>
//   fetch('/categoryData.json').then((response) => console.log(response.json()));

const request = async (url) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {}
};

const getCategoryData = async () => {
  const data = await request('/categoryData.json');
  return data;
};

const getNewsData = async () => {
  const data = await request('/News.json');
  return data;
};

export default getCategoryData;
