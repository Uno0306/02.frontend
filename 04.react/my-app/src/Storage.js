import React, { useEffect, useRef, useState } from "react";

function Storage() {
  const [name, setName] = useState("");
  const [check, setCheck] = useState(false);
  const [arr, setArr] = useState([]);
  const nextKey = useRef(window.localStorage.length);
  const inputRef = useRef();
  const [data, setData] = useState("");

  const onChange = e => {
    setName(e.target.value);
    setCheck(false);
    setArr([]);
  };

  // const saveName = () => {
  //     nextKey.current += 1;
  //     const user = { name: name };
  //     window.localStorage.setItem(`key${nextKey.current}`,JSON.stringify(user))
  //     setName("")
  //     inputRef.current.focus();
  // }

  const saveName = () => {
    const user = { name: name };
    // window.localStorage.setItem("key1", name);
    // window.localStorage.setItem("name1", JSON.stringify(user));
    window.localStorage.setItem("name3", JSON.stringify(user));
  };

  // const loadName = () => {
  //     var array = [];
  //     var bool = check;
  //     for (let i = 0; i < window.localStorage.length; i++) {
  //         let key = window.localStorage.key(i);
  //         const value = window.localStorage.getItem(key);
  //         if(name !== ""){
  //             if (JSON.parse(value).name === name) {
  //                 // arr.push({ key, name });
  //                 // setCheck(check ? check : !check);
  //                 // setArr(arr);

  //                 array.push({key, name});
  //                 bool = bool? bool: !bool;
  //                 // setArr(arr);
  //             }
  //         }
  //     }

  //     setArr(array);
  //     setCheck(bool);
  //     setName("")
  //     inputRef.current.focus();
  // }

  const loadName = () => {
    // setCheck(true);
    // 키를 어떻게 찾아올 수 있을까
    // let showData = "";
    let showData = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      // console.log(window.localStorage.key(i));
      let key = window.localStorage.key(i);
      // console.log(window.localStorage.getItem(key));
      let value = window.localStorage.getItem(key);

      // console.log(JSON.parse(value).name === name);
      if (JSON.parse(value).name === name) {
        // showData = JSON.parse(value).name;

        // 이름만 넣어주기
        // showData[i] = JSON.parse(value);
        showData[i] = { key: key, name: JSON.parse(value).name };
        console.log(showData[i]);
        // 강사님 코드
        // showData.push({key, name});
      } else {
        // showData[i] = "";
      }
    }
    setData(showData);
    setCheck(showData.length === 0 ? false : true);
  };

  useEffect(() => {
    loadName();
  }, [name]);

  return (
    <div>
      <input
        name="name"
        value={name}
        placeholder="이름을 입력하시오"
        onChange={onChange}
      />
      <button onClick={saveName}>저장</button>
      <button onClick={loadName}>요청</button>
      {/* {check ? <p>{data}</p> : <></>} */}
      {check ? (
        data.map(obj => {
          return <p key={obj.key}>{obj.name}</p>;
        })
      ) : (
        <></>
      )}
    </div>
  );
}
export default Storage;
