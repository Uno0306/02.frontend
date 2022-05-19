import React, { useCallback, useState } from "react";
import Item from "./Item";

function UseCallback2(){
    const [size, setSize] = useState(100);
    const [darkMode, setDarkMode] = useState(false);

    const createItemStyle = useCallback(() => {
        return{
            background: "gold",
            width: `${size}px`,
            height: `${size}px`
        };
    }, [size]);

    return (
        <div 
            style={{
                background: darkMode? "black" : "white"
            }}
        >
            <input
                type="number"
                value={size}
                onChange={(e) => setSize(e.target.value)}
            >
            </input>
            <br />
            <button onClick={() => setDarkMode(!darkMode)}>darkMode</button>
            <Item createItemStyle={createItemStyle}></Item>
        </div>
    );
};
export default UseCallback2;