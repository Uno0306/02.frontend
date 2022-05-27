// `https://pixabay.com/api/?key=${api}&q=red+rain&image_type=photo&pretty=true`
const requests = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default requests;
