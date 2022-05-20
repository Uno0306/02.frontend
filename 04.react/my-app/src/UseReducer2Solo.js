import React, { useCallback, useReducer, useRef, useState } from "react";
// import {useCallback, useEffect} from "react"
import ListSolo from "./ListSolo";


const ACTION_TYPES = {
    add: "add"
};

const reducer = (state, action) => {
//    const addList = {};
//    const addBList = {};

    switch(action.type){
        case ACTION_TYPES.add:
            // setList((initialList) => {
            //     return (
                    
            //         initialList.concat( addBList = {
            //             count: 2,
            //             addList = {
            //                 id: 2,
            //                 name: action.stock,
            //                 confirmed: true
            //             }
            //         })
            //     ); 
            // })
            // return console.log(action.stock);
            if(action.name === ""){
                action.name = "empty";
            }   

            const actionArr = {id : action.id, 
                name : action.name, 
                confirmed: action.confirmed};
            // console.log(state);
            return ( state = {count : action.id, 
                            lists : state.lists.concat(actionArr)}
            )

            // return state = {count : action.id.current,lists : [...state.lists,{
            //     id : action.id.current,
            //     name : action.name,
            //     confirmed : true}]};


        default:
            return state;
    }
}

const initialList = {
    count: 1, 
    lists : [
        {
            id: 1,
            name: 'ramen',
            confirmed: true
        }
    ]
}

// var arr = initialList.lists;  
// var length = arr.length;  

// function useForceUpdate(){
//     const [value, setValue] = useState(0); // integer state
//     return () => setValue(value => value + 1); // update the state to force render
// }


function UseReducer2Solo() {
    const [list, setList] = useState("");
    const [finalList, dispatch] = useReducer(reducer, initialList); 

    // const inputValue = () => {
    // }

    // const forceUpdate = useForceUpdate();
    // console.log(finalList);
    // arr = finalList.lists;
    // console.log("id ;" + arr.length);
    const num = initialList.lists[initialList.lists.length-1].id;
    
    // console.log(num);
    const refId = useRef(num);
    
    // console.log(refId);
    const updateRefId = () =>{
        refId.current = refId.current+1;
    }

    const inputRef = useRef();
    // updateRefId();
    // console.log("length : " + finalList.lists.length);
    // console.log("id : " + refId.current);

    return(
        <div>
            <h2>물품 리스트</h2>
            <p>총 물품수 : {finalList.count} 개</p>
            <input 
                type="text"
                placeholder="물품을 입력하세요"
                onChange={useCallback((e) => {setList(e.target.value)}, [finalList])}
                value={list}
                ref={inputRef}
            >
                {/* {console.log("list : "+list)} */}
            </input>
                {/* {console.log(initialList.lists[0])}
                    {console.log(list)} */}
            <button 
                // onClick={inputValue}
                onClick={() => {
                    updateRefId();
                    // console.log("name: " +list + ", id: " + refId.current);
                    dispatch({type: ACTION_TYPES.add, name: list, id: refId.current, confirmed: true});
                    setList("");  
                    inputRef.current.focus();                  
                }}
            >
                추가
            </button>

            {/* {finalList.lists.map((obj) => {
                return <ListSolo key={obj.id} name={obj.name} obj={obj}><br/></ListSolo> 
            })} */}
            {/* {console.log(finalList)}; */}
            <ListSolo props={finalList} ></ListSolo>

            {/* <ListSolo props={finalList.count, finalList.lists.map((obj) => {
                return  obj={obj};
            })}></ListSolo> */}

            
            {/* {initialList.map((count, lists.map((name) =>{
                return {name}
            })) => {
                return <p key={count}>{lists.name}</p>
            })} */}
            
        </div>
    )
}

export default UseReducer2Solo;