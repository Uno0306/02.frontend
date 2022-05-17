import React from "react";

function View({children}){
    console.log(children);
    const styleVa = {
        border: "4px dashed navy",
        padding: 20, 
        margin: 20
    }
    return(
        <div style={styleVa}>{children}</div>
    )
}


export default View;