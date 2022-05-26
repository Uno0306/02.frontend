import { useState } from 'react';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import NewsList from './pages/NewsList';

function App() {
  const [category, setCategory] = useState('');

  const seletCategory = useCallback((category) => setCategory(category), []);
  const { categoryValue } = useParams();
  // console.log(categoryValue);
  // console.log(category);
  return (
    // <div>
    //   <button onClick={getData}>Request Data</button>
    // </div>
    <>
      <Categories
        // category={category}
        // categoryValue={categoryValue}
        seletCategory={seletCategory}
      ></Categories>
      <NewsList categoryValue={categoryValue} category={category}></NewsList>
    </>
  );
}

export default App;
