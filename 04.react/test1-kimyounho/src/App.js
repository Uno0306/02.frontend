import './App.css';
import { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

// 작성
const LectureList = styled.ul`
  padding-left: 0px;
`;

// 작성
const Lecture = styled.li`
  width: 100px;
  background: palevioletred;
  color: white;
  font-size: 1.125rem;
  list-style-type: none;
  text-align: center;
  border-radius: 5px;
  padding: 0.25rem;
  margin: 5px;
`;

function App() {
  // // Q1 //
  // const [number, setNumber] = useState(1);
  // const num = useRef(number);

  // const handleNumberUpdate = () => {
  //   // setNumber(number + 1);
  //   // console.log(number);
  //   // setNumber(number + 1);
  //   // console.log(number);
  //   // useEffect(() => {
  //   //   setNumber(number + 1);
  //   // }, [number]);
  //   // setNumber(this.number + 1);
  //   // setNumber(num.current + 1);
  //   // setNumber(number + 1);
  //   setNumber(number + 1);
  //   setNumber((number) => number + 1);
  // };

  // // useEffect(() => handleNumberUpdate, [number]);

  // return (
  //   <div className='App'>
  //     <p>현재 숫자 : {number}</p>
  //     <button onClick={handleNumberUpdate}>+</button>
  //   </div>
  // );
  //
  //
  // // Q2 //
  // const [bookTitle, setBookTitle] = useState('');
  // useEffect(() => {
  //   if (bookTitle !== '') {
  //     setBookTitle(bookTitle);
  //   }
  // }, [bookTitle]);

  // const [bookPrice, setBookPrice] = useState(0);
  // useEffect(() => {
  //   if (bookPrice !== '') {
  //     setBookPrice(bookPrice);
  //   }
  // }, [bookPrice]);

  // const [book, setBook] = useState({
  //   title: '',
  //   price: 0,
  // });
  // const a = '';
  // const b = 0;
  // useEffect(() => {
  //   if (book !== '') {
  //     setBook({
  //       title: a,
  //       price: b,
  //     });
  //   }
  // }, [book]);
  // return <></>;
  //
  //
  // Q3 //
  const [lectures, setLectures] = useState(['HTML', 'CSS', 'JavaScript']);
  // const [newLecture, setNewLecture] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // 작성
  const handleInputLecture = (event) => {
    // setNewLecture(event.target.value);
    inputRef.current.value = event.target.value;
  };

  // 작성
  const handleUpdateLecture = () => {
    // setLectures(newLecture !== '' ? [...lectures, newLecture] : lectures);
    // inputRef.current.value === ''
    //   ? setLectures(lectures)
    //   : setLectures([...lectures, inputRef.current.value]);
    setLectures(
      inputRef.current.value !== ''
        ? [...lectures, inputRef.current.value]
        : lectures
    );
    // setNewLecture('');
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div className='lecture-container'>
      <div>
        <input
          ref={inputRef}
          type='text'
          placeholder='배운 과목을 입력해주세요'
          onChange={handleInputLecture}
          // value={newLecture}
        ></input>
        <button onClick={handleUpdateLecture}>추가</button>
      </div>
      <LectureList>
        {lectures.map((lecture, idx) => (
          <Lecture key={lecture + idx}>{lecture}</Lecture>
        ))}
      </LectureList>
    </div>
  );
}

export default App;
