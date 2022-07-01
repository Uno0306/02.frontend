import React, { useState } from "react";
import axios from "axios";

function Dept() {
  const allSelect = () => {
    var dom = document.getElementById("dom");
    dom.innerHTML = "";
    const url = "/api/depts";
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        for (var i = 0; i < data.length; i++) {
          var arr = data[i];
          var da = "";
          for (da in arr) {
            dom.innerHTML += da + ": " + arr[da] + " ";
          }
          dom.innerHTML += "<br/>";
        }
      });
  };

  const insertByDeptno = () => {
    const deptno = document.getElementById("deptno");
    const dname = document.getElementById("dname");
    const loc = document.getElementById("loc");
    /* json 사용하여 INSERT */

    const url = "/api/deptjson";
    const inputDept = {
      deptno: deptno.value,
      dname: dname.value,
      loc: loc.value
    };
    const headers = {
      "Content-Type": "application/json"
    };
    insertAxios(url, inputDept, headers);
  };

  function insertAxios(url, inputDept, headers) {
    axios.post(url, inputDept, { headers }).catch(error => {
      console.log(error);
    });
  }

  const updateByDeptno = () => {
    const deptno3 = document.getElementById("deptno3");
    const dname3 = document.getElementById("dname3");
    const loc3 = document.getElementById("loc3");
    /* json 사용하여 UPDATE */

    const url = "/api/update";
    const updateDept = {
      deptno: deptno3.value,
      dname: dname3.value,
      loc: loc3.value
    };
    console.log(updateDept);
    const headers = {
      "Content-Type": "application/json"
    };
    axios
      .put(url, updateDept, { headers })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const deleteByDeptno = () => {
    const deptno4 = document.getElementById("deptno4");
    /* json 사용하여 DELETE */

    const url = "/api/delete";

    const headers = {
      "Content-Type": "application/json"
    };
    axios
      .delete(
        url,
        {
          data: {
            deptno: deptno4.value
          }
        },
        { headers }
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <input type="button" value="모든검색" onClick={allSelect} />
      <input type="button" value="추가" onClick={insertByDeptno} />
      <input type="button" value="수정" onClick={updateByDeptno} />
      <input type="button" value="삭제" onClick={deleteByDeptno} />
    </div>
  );
}

export default Dept;
