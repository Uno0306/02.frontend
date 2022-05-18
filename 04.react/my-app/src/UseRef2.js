import React, { useState, useRef } from "react";

function UseRef1(){
    let number = 0;
    
    const refNumber = useRef(0);
    
    const updateNumber = () => {
        number = number + 1;
        console.log("Number : ", number);
    };
    
    const updateRefNumber = () => {
        refNumber.current = refNumber.current + 1;
        console.log("RefNumber : ", refNumber.current);
    };

    const [renderVar, setRenderNumber] = useState(0);

    const renderPage = () => {
        setRenderNumber(renderVar + 1);
    };

    const renderNumbers = () => {
        console.log("Number : ", number, " - RefNumber : ", refNumber.current);
    }

    return(
        <div>
            <div>
                <p>Number : {number}</p>
                <button onClick={updateNumber}>Number+1</button>
            </div>
            <hr />
            <div>
                <p>RefNumber : {refNumber.current}</p>
                <button onClick={updateRefNumber}>RefNumber+1</button>
            </div>
            <hr />
            <div>
                <button onClick={renderPage}>Render</button>
            </div>
            <div>
                <button onClick={renderNumbers}>Show Numbers</button>
            </div>
        </div>
    );
};

export default UseRef1;