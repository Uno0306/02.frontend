import React, { useEffect} from "react";
// import { useState} from "react";

function UseEffect2(previousState){
    // version1
    useEffect(() => {
        const work = setInterval(() => {
            console.log("---work---");
        }, 1000);

        return() => {
            clearInterval(work);
        }
    })

    return(
        <div>
            <span>작업 중 - 콘솔 보기</span>
        </div>
    );

    // version2
    // const[input,setInput]= useState("")
    // useEffect(() => {
    //     if (previousState.state) {
    //         setInput("작업중 - 콘솔보기")
    //         const work = setInterval(() => {
    //         }, 1000);
    //     }
    // })
    // return (
    //     <div>
    //         <span>{input}</span>
    //     </div>
    // )

}

export default UseEffect2;