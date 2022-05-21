import React, { useEffect, useRef, useState } from "react";

function Storage2() {
    const [name, setName] = useState("");
    const [key, setKey] = useState("");
    const [check, setCheck] = useState(false);
    const [rend, setRend] = useState(false);
    const cnt = useRef(window.localStorage.length);
    const inputRef = useRef();
    const inputRef2 = useRef();

    const onKeyNameChange = (e) => {
        // console.log(e.target.value);
        setKey(e.target.value)
    };


    const saveKey = () => {
        setKey(key)
        console.log(key);
        inputRef2.current.focus();
    }

    const onChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value)
        setCheck(false);
    };

    const saveName = () => {
        const user = {name : name};
        // window.localStorage.setItem("key1", name);
        // window.localStorage.setItem("key2", user);
        // window.localStorage.setItem("key3", JSON.stringify(user));
          // var cnt = window.localStorage.length+1;
        cnt.current += 1;
        window.localStorage.setItem(`key${cnt.current}`, JSON.stringify(user));
        // setCnt(!cnt);
        inputRef.current.focus();
    }

    const loadName = () => {
        // count++;
        // console.log(count);
        setRend(!rend);
        // for(var i = 0; i<window.localStorage.length;  i++){
        //     console.log(window.localStorage.key(i));
        //     if(window.localStorage.key(i) === "key3"){
        //         // console.log(JSON.parse(window.localStorage.getItem("key3")).name);
        //         // setCheck(() => {
        //         //         return function ()  {
        //         //             if(check === false)  {
        //         //                 return  setCheck(true)
        //         //             }
        //         //         }
        //         // });
                

        //         console.log("if " + check);
        //     }
        //     else{
        //         setCheck(false);
        //         console.log("else " + check);
        //     }
        // }
        
    }

    useEffect(() => {
        console.log("d");
        // setName(JSON.parse(window.localStorage.getItem("key3")).name);
        var adr = false;
        // console.log("adr1: "+adr);
        // var array = {};
        const func = () => {
            for(var i = 0; i<window.localStorage.length;  i++){
            // console.log(window.localStorage.key(i));
                if(window.localStorage.key(i) === key){
                    // console.log(JSON.parse(window.localStorage.getItem(key)).name);
                    if(JSON.parse(window.localStorage.getItem(key)).name === name){
                        adr = true;
                    }
                }
                // console.log("adr2: "+adr);
            }
            
            // for(var i = 0; i<window.localStorage.length; i++){ 
            //     if(JSON.parse(window.localStorage.getItem(window.localStorage.key(i))).name === name){
            //         // array = [...array, {
            //         //     key : window.localStorage.getItem(window.localStorage.key(i)).key,
            //         //     name: window.localStorage.getItem(window.localStorage.key(i)).name
            //         // }]
            //         setArr([...arr, {
            //             key : window.localStorage.getItem(window.localStorage.key(i)).key,
            //             name: window.localStorage.getItem(window.localStorage.key(i)).name
            //         }])
            //         adr = true;
            //         console.log(array);
            //     }
            // }

        }
    
        func();
        setCheck(adr);
        inputRef.current.focus();
    }, [rend]);
    console.log("result : " + check);


    return(
        <div>
            <div>
                <input
                    ref={inputRef2}
                    name="name"
                    placeholder="key를 입력하시오"
                    onChange={onKeyNameChange}
                />
                <button
                    onClick={saveKey}
                >입력</button>
                <br />
                <input
                    ref={inputRef}
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
                {/* {check? <p>{arr.key}: {arr.name}</p> <></>} */}
                {check? <p>{name}</p> : <></>}
            </div>
        </div>
    )
}

export default Storage2;