import React, { useState } from "react";

function Storage() {
    const [name, setName] = useState("");
    const [check, setCheck] = useState(false);

    const onChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value)
    };

    const saveName = () => {
        const user = {name : name};
        window.localStorage.setItem("key1", name);
        window.localStorage.setItem("key2", user);
        window.localStorage.setItem("key3", JSON.stringify(user));
    }

    // const loadName = () => {
    //     setCheck(!check)
    // }

    const loadName = () => {
        console.log("----");
        for(var i = 0; i<window.localStorage.length;  i++){
            console.log(window.localStorage.key(i));
            if(window.localStorage.key(i) === "key3"){
                // console.log(JSON.parse(window.localStorage.getItem("key3")).name);
                // setCheck(() => {
                //         return function ()  {
                //             if(check === false)  {
                //                 return  setCheck(true)
                //             }
                //         }
                // });
                

                console.log("if " + check);
            }
            else{
                setCheck(false);
                console.log("else " + check);
            }
        }
    }

    return(
        <div>
            <input
                name="name"
                placeholder="이름을 입력하시오"
                onChange={onChange}
            />
            <button
                onClick={saveName}
            >저장</button>
            <button
                onClick={loadName}
            >요청</button>
            {check? <p>dd</p> : <></>}
        </div>
    )
}

export default Storage;