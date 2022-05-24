import React, { useEffect, useReducer } from "react";
// import { useState } from "react";
import axios from "axios";
// import { getUsers } from "../api/users";
// import styled from "styled-components";
// import styles from "./Async.module.css";
let url = "https://jsonplaceholder.typicode.com/users";

// const Img = styled.img`
//   border-radius: 50%;
// `;

const ACTION_TYPE = {
  load: "LOADING",
  succ: "SUCCESS",
  err: "ERROR"
};

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null
      };

    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null
      };

    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error("또 다른 문제");
  }
}

function Async() {
  // photos : state
  // const [photos, setPhotos] = useState([]);

  // 방법1
  // const usersData = getUsers();
  // usersData.then(response => {
  //   // console.log("-------------ㄱ");
  //   // console.log(response);
  //   // console.log("ㄴ-------------");
  // });
  // const getData = () => {
  //   axios
  //     .get(url)
  //     .then(response => {
  //       // console.log(response);
  //       // console.log(response.data);
  //       console.log(response.data[0].id);
  //       console.log(response.data[response.data.length - 1].id);
  //       // 10개버튼과 prev와 next 출력
  //       // prev 1 2 3 4 5 6 7 8 9 10 next
  //       // prev 기본값 false - next를 눌렀을 때, prev는 true, prev의 바로 오른쪽 id최저값이 1보다 작으면 prev false
  //       // next 기본값 true - prev 눌렀을 때, next는 true, next의 바로 왼쪽 최대값이 5000보다 크면 next false
  //       // 10*10 그럼 10개
  //       // 기본 배열 10개 1은 1~10, 2는 11~20, 40은 391~400, 499은 4991~5000
  //       // 10개의 값 배열 저장 버튼 값은 그 배열의 첫 id
  //       // 10개 출력은 for문으로 slice로 받아와서 출력

  //       setPhotos(response.data);

  //       // return response.data;
  //     })
  //     // .then(data => {
  //     //   console.log(data);
  //     //   console.log("정상응답(1)");
  //     // })
  //     .catch(error => {
  //       console.log("비정상응답", error);
  //     });
  // };

  // Reducer / state / dispatch - 데이터 요청 / 데이터 응답(정상 VS 비정상)
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });

  // 방법2
  const getData2 = async () => {
    dispatch({ type: ACTION_TYPE.load });
    try {
      const response = await axios.get(url);
      dispatch({ type: ACTION_TYPE.succ, data: response.data });
      console.log("정상응답(2)");
      // response;
    } catch (error) {
      dispatch({ type: ACTION_TYPE.err, error: error });
      console.log("비정상응답(2)", error);
    }
  };

  useEffect(() => {
    getData2();
  }, []);

  const { loading, data, error } = state;
  console.log(loading);
  console.log(data);
  console.log(error);

  if (loading) return <div>DATA REQUEST</div>;
  if (error) return <div>!ERROR CHECK</div>;
  if (!data) return null;

  // 방법3
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then(response => {
  //       console.log(response);
  //       return response.data;
  //     })
  //     .then(data => {
  //       console.log(data);
  //       console.log("정상응답(3)");
  //     })
  //     .catch(error => {
  //       console.log("비정상응답", error);
  //     });
  // }, []);

  return (
    <div>
      {/* <button onClick={getData}>정보1호출</button> */}
      <button onClick={getData2}>Data Loaing</button>
      {/* <button>정보3호출</button> */}
      {/* <br /> */}
      {/* {photos.map(photo => {
        return photo.id <= 10 ? (
          <div key={photo.id}>
            <p>id: {photo.id}</p>
            <Img
              // className={styles.circle}
              src={photo.thumbnailUrl}
              alt={photo.id}
            />
          </div>
        ) : (
          ""
        );
      })} */}
      {/* <br /> */}
      {/* {photos.id <= 10 ? "" : <button>prev</button>}
      <button>next</button> */}

      {/* 리듀서 사용 */}
      <ul>
        {data.map(user => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Async;
