import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUsers } from "../api/users";
import styled from "styled-components";
import styles from "./Async.module.css";
var url = "https://jsonplaceholder.typicode.com/photos";

const Img = styled.img`
  border-radius: 50%;
`;

function Async() {
  // photos : state
  const [photos, setPhotos] = useState([]);

  // 방법1
  const usersData = getUsers();
  usersData.then(response => {
    // console.log("-------------ㄱ");
    // console.log(response);
    // console.log("ㄴ-------------");
  });
  const getData = () => {
    axios
      .get(url)
      .then(response => {
        // console.log(response);
        // console.log(response.data);
        console.log(response.data[0].id);
        console.log(response.data[response.data.length - 1].id);
        // 10개버튼과 prev와 next 출력
        // prev 1 2 3 4 5 6 7 8 9 10 next
        // prev 기본값 false - next를 눌렀을 때, prev는 true, prev의 바로 오른쪽 id최저값이 1보다 작으면 prev false
        // next 기본값 true - prev 눌렀을 때, next는 true, next의 바로 왼쪽 최대값이 5000보다 크면 next false
        // 10*10 그럼 10개
        // 기본 배열 10개 1은 1~10, 2는 11~20, 40은 391~400, 499은 4991~5000
        // 10개의 값 배열 저장 버튼 값은 그 배열의 첫 id
        // 10개 출력은 for문으로 slice로 받아와서 출력

        setPhotos(response.data);

        // return response.data;
      })
      // .then(data => {
      //   console.log(data);
      //   console.log("정상응답(1)");
      // })
      .catch(error => {
        console.log("비정상응답", error);
      });
  };
  // 방법2
  const getData2 = async () => {
    const response = await axios.get(url);
    try {
      // console.log(response.data);
      // console.log("정상응답(2)");
      // response;
    } catch (error) {
      // console.log("비정상응답", error);
    }
  };
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
      <button onClick={getData}>정보1호출</button>
      <button onClick={getData2}>정보2호출</button>
      <button>정보3호출</button>
      <br />
      {photos.map(photo => {
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
      })}
      <br />
      {/* {photos.id <= 10 ? "" : <button>prev</button>}
      <button>next</button> */}
    </div>
  );
}
export default Async;
