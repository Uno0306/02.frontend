import { useRef, useState } from 'react';
import './App.css';
import Image from './Image';

function App() {
  // input 제어를 위한 useRef
  const imgRef = useRef(null);
  const [imgList, setImgList] = useState([]);
  // console.log(imgList);
  const [check, setCheck] = useState(true);
  return (
    <div className='container'>
      <div className='main'>
        <div
          className='add-button'
          onClick={() => {
            imgRef.current.click();
          }}
        >
          +
        </div>
        <input
          className='file-upload-input'
          type='file'
          ref={imgRef}
          onChange={(event) => {
            // // console.log(event.target.value);
            // console.log(event.currentTarget.value);
            // // setImgList([...imgList, event.currentTarget.value]);
            // const value = event.currentTarget.value;
            // setImgList((prev) => {
            //   return [...prev, value];
            // });
            setCheck(false);
            // console.log(event.currentTarget.files);
            // console.log(event.currentTarget.files[0]);
            const fileReader = new FileReader();
            const file = event.currentTarget.files[0];
            // console.log(typeof event.currentTarget.files[0]);
            fileReader.readAsDataURL(file);
            fileReader.onloadend = (e) => {
              console.log(e.target.result);
              setImgList((prev) => {
                return [...prev, e.target.result];
              });
            };
            event.currentTarget.value = '';
          }}
        />
        {check ? (
          <div className='main-text'>Choose Image</div>
        ) : (
          <div className='gallery'>
            <div className='img-item'>
              {imgList.map((img, idx) => {
                return (
                  // <div className='img-item' key={img + idx}>
                  //   <img src={img} alt='' />
                  // </div>
                  <Image key={img + idx} src={img}></Image>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
