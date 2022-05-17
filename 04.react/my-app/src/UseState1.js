import React, { useState } from "react";

function Usestate1(){
    const [time, setTime] = useState(1);

    const updateTime = () => {
        
        // 24시간까지만 표기할 수 있도록
        // 24 이후에 time이 어떻게 다시 1이 되도록
        // setTime(time + 1);
        let newTime;
        if(time >= 24){
            newTime = 1;
        }else{
            newTime = time + 1;
        }
        setTime(newTime);
    };

    return(
        <div>
            <span>Now : {time}</span>
            <button onClick={updateTime}>Click!</button>
        </div>
    )
}

export default Usestate1;