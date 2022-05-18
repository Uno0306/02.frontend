import React, { useEffect, useRef } from "react";

function UseRef3() {
    const inputRef = useRef();
    
    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    })
    
    // 문제
    // 이름을 입력합니다.
    // 입력 버튼을 누릅니다.
    // 입력한 이름이 alert() 창에 출력되로록 합니다.
    // alert()창을 닫으면 다시 input으로 포커싱합니다.
    const showName = () => {
        alert(inputRef.current.value);
        inputRef.current.value = "";
    }

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="name" />
            <button onClick={showName}>입력</button>
        </div>
    );
}

export default UseRef3;