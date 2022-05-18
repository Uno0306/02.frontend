import React from "react"

function Hello({name, color, important}){
    // console.log(important);

    // console.log(props);
    
    // console.log(name);
    // return <div style={props}>Hello, {props.name} {props.children}</div>

    return (
        <div style={{
                color: color
            
        }}>
            {/* {important ? '!!' : null} */}
            {important && '!!'} 
            Hello, {name}
        </div>
    )
}


Hello.defaultProps = {
    name: "name props 기본값"
}



export default Hello;