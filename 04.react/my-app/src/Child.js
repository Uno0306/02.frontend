import React from "react";

function Child(props){
    // console.log(props);
    
    // const updateNum = () => {
    //     console.log(props.num);
    //     props.getNum(props.num + 1);
    // }


    return(
        <div>
            {/* <button onClick={updateNum}>+1</button> */}
            <button onClick={() =>{
                props.setData("child data")
            }}>
                send data to Parent
            </button>
        </div>
    );
}

export default Child;