import React, { useState } from "react";
import Child from "./Child";

function Parent(){
    // const [num, setNum] = useState(0);
    const [data, setData] = useState("parent data")
    // const getNum = (num) => {
    //     setNum(num);
    // }


    return(
        // <div>
        //     <p>여기는 부모입니다 : {num}</p>
        //     <Child num={num} getNum={getNum}></Child>
        // </div>
        <>
            <div>{data}</div>
            <Child setData={setData}>
            </Child>
        </>
    );
}

export default Parent;