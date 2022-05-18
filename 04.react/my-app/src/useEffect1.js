import React, { useEffect, useState } from "react";

function UseEffect1(){
    const [number, setNumber] = useState(0);
    
    const updateNumber = () => {
        setNumber(number +1);
    };
    
    const [text, setText] = useState("");
    const inputValueChange = (event) => {
        setText(event.target.value);
    };

    // useEffect 수행 코드 : console.log("--useEffect")
    // useEffect(() => {
    //     console.log("--useEffect 실행--");
    // });

    // 한 번만 실행
    useEffect(() => {
        console.log("--useEffect 실행--");
    }, []);
    
    // number가 변할 때만 useEffect 실행
    // useEffect(() => {
    //     console.log("--useEffect 실행 : number--");
    // }, [number]);

    // text가 변할 때만 useEffect 실행
    // useEffect(() => {
    //     console.log("--useEffect 실행 : text--");
    // }, [text]);
    
    // name과 text가 변할 때
    // useEffect(() => {
    //     console.log("--useEffect 실행 : number, text--");
    // }, [number, text]);

    return(
        <div>
            <div>
                <button onClick={updateNumber}>+1</button>
                <span>Current Number {number}</span>
            </div>
            <div>
                <input type="text" onKeyUp={inputValueChange}/>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default UseEffect1;