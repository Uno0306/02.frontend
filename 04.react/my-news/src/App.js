import { useState } from 'react';
import { useCallback } from 'react';
import './App.css';
import Categories from './components/Categories';
import NewsList from './pages/NewsList';

function App() {
  const [category, setCategory] = useState('');

  const seletCategory = useCallback((category) => setCategory(category), []);
  // console.log(category);
  return (
    // <div>
    //   <button onClick={getData}>Request Data</button>
    // </div>
    <>
      <Categories
        // category={category}
        seletCategory={seletCategory}
      ></Categories>
      <NewsList category={category}></NewsList>
    </>
  );
}

export default App;
