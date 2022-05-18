import React, { useState, useRef } from "react";

function UseRef1(){
    const [stateNumber, setStateNumber] = useState(0);
    const updateStateNumber = () => {
        setStateNumber(stateNumber +1);
    };
    // console.log('---랜더링---');

    const refNumber = useRef(0);
    const updateRefNumber = () => {
        refNumber.current = refNumber.current + 1;
    };

    console.log(refNumber.current);
    return(
        <div>
            <div>
                <p>StateNumber : {stateNumber}</p>
                <button onClick={updateStateNumber}>stateNumber+1</button>
            </div>    
            <hr />
            <div>
                <p>RefNumber : {refNumber.current}</p>
                <button onClick={updateRefNumber}>stateNumber+1</button>
            </div>    
        </div>
    );
};

export default UseRef1;