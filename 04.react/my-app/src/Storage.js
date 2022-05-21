import React, { useRef, useState } from "react";

function Storage() {
    const [name, setName] = useState("");
    const [check, setCheck] = useState(false);
    const [arr, setArr] = useState([]);
    const nextKey = useRef(window.localStorage.length);
    const inputRef = useRef();

    const onChange = (e) => {
        setName(e.target.value);
        setCheck(false);
        setArr([]);
    }

    const saveName = () => {
        nextKey.current += 1;
        const user = { name: name };
        window.localStorage.setItem(`key${nextKey.current}`,JSON.stringify(user))
        setName("")
        inputRef.current.focus();
    }

    const loadName = () => {
        var array = [];
        var bool = check;
        for (let i = 0; i < window.localStorage.length; i++) {
            let key = window.localStorage.key(i);
            const value = window.localStorage.getItem(key);
            if (JSON.parse(value).name === name) {
                // arr.push({ key, name });
                // setCheck(check ? check : !check);
                // setArr(arr);

                array.push({key, name});
                bool = bool? bool: !bool;
                // setArr(arr);
            }
        }

        setArr(array);
        setCheck(bool);
        setName("")
        inputRef.current.focus();
    }

    return (
        <div>
            <input
                ref={inputRef}
                name="name"
                placeholder="이름을 입력하시오"
                onChange={onChange}
                value={name} />
            <button
                onClick={saveName}>저장</button>
            <button
                onClick={loadName}>요청</button>
            {arr.map((ppl) => {
                return <p key={ppl.key}>{ppl.key} : {ppl.name}</p>
            })}

        </div>
    )
}
export default Storage;