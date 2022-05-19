import React, { useEffect, useState } from "react";

// update가 일어나는 경우
// 1. state가 바뀔 때
// 2. 부모에서 전달받은 props가 바뀔 떄
// 3. 부모 component가 랜더링 될 때
// 4. 강제적인 랜더링이 진행될 때


function Item({createItemStyle}) {
    const[styleValue, setStyleValue] = useState({});

    useEffect(() => {
        console.log("Item Update");
        setStyleValue(createItemStyle)
    },[createItemStyle])

    return (
        <div style={styleValue}></div>
    )
}

export default Item;
