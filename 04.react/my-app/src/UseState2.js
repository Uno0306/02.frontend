import React, { useLayoutEffect, useRef, useState } from "react";

function Usestate2(){
    let students = ["신현", "성종"];
    const [names, setNames] = useState(students)
    const [input, setInput] = useState("");


    const inputValueChange = (event) => {
        // console.log("입력값 함수 동작");
        // console.log(event.target.value);
        setInput(event.target.value);

    }
    
    const inputValueRecord = () => {
        // console.log(names);
        setNames((previousValue) => {

            // // spread로 증가
            // return [...previousValue, input] 
            
            // // concat으로 증가
            // return previousValue.concat(input)
            
            // // push로 증가
            // let arr = Array.from(previousValue)
            // arr.push(input)
            // return arr
        });
        setInput("");
        
    }

    
    return(
        <div>
            <input id="text" type="text" onChange={inputValueChange} value={input}></input>
            <button onClick={inputValueRecord} >Record!</button>
            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>
            })}
        </div>
    )
}

export default Usestate2;