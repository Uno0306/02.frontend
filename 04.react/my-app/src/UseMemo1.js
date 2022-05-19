import React, {useMemo, useState } from "react";

const heavyWork = (num) => {
    console.log('--heavy wokr--');
    for(let i = 0; i < 1000000000; i++){} // 무거운 작업
    return num + 100;
};

const easyWork = (num) => {
    console.log('--heavy work--');
    return num + 1;
};

function UseMemo1() {
    const [heavyNum, setHeavyNum] = useState(1);
    const [easyNum, setEasvyNum] = useState(1);

    // const heavySum = heavyWork(heavyNum);
    const heavySum = useMemo(() => {
        return heavyWork(heavyNum);
    }, [heavyNum]);
    
    const easySum = easyWork(easyNum);

    return(
        <div>
            <h3>Plus + 100(with Heavy Work)</h3>
            <input 
                type="number"
                value={heavyNum}
                onChange={(e) => setHeavyNum(parseInt(e.target.value))}></input>
            <span> + 100 = {heavySum}</span>
            <h3>Plus + 100(with Easy Work)</h3>
            <input 
                type="number"
                value={easyNum}
                onChange={(e) => setEasvyNum(parseInt(e.target.value))}></input>
            <span> + 1 = {easySum}</span>
        </div>
    );
};


export default UseMemo1;