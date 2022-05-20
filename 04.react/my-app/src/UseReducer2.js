import React, { useCallback, useEffect, useReducer, useRef, useState } from "react";
import List from "./List";

const ACTION_TYPE = {
    add: "add-list",
    delete: "delete-list",
    alter: "confirmed-list"
}

const reducer = (state, action) => {
   console.log(action.type);
   switch(action.type){
       case "add-list":
            if(action.list === ""){
                action.list = "empty";
            }   
            console.log(action.stock);
            console.log(action.id.current);
            console.log(action.list);
            const name = action.list;
            const newList = {
                id: action.id.current += 1,
                // name : action.list,
                name,
                confirmed : true
            }

            return{
                count: state.count +1,
                lists: [...state.lists, newList]
            }
        case "delete-list":
            const delList = state.lists.filter((list) => list.id !==  action.id.id);

            return  {
                count : state.count -1,
                lists : delList
            };

        case "confirmed-list":
            // 내 코드
            // console.log(state.lists[action.id.id-1].name + " " + state.lists[action.id.id-1].confirmed);
            
            // const id = action.id.id-1;
            // state.lists[id].confirmed = !(state.lists[id].confirmed);
        
            // if(state.lists[id].id === action.id.id){
            //     return {...state, confirmed: !(action.confirmed)}
            // }

            // return state; 

            // 강사님 코드
            return {
                count : state.count,
                lists: state.lists.map((list) => {
                    if(list.id === action.id.id){
                        // console.log(list.name + " " + list.confirmed);
                        return {...list, confirmed: !list.confirmed}
                    }
                    return list
                })
            };
        
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

function UseReducer2() {
    const currentId = useRef(1);
    const [list, setList] = useState("");
    const [finalList, dispatch] = useReducer(reducer, initialList); 
    // console.log(finalList);
    // console.log(list);

    return(
        <div>
            <h2>물품 리스트</h2>
            <p>총 물품수 : {finalList.count} 개</p>
            <input 
                type="text"
                placeholder="물품을 입력하세요"
                onChange={(e) => setList(e.target.value)}>
            </input>
            <button 
                onClick={() => {
                    dispatch({type: ACTION_TYPE.add, id: currentId, list: list})

                }}
            >
                추가
            </button>
            {finalList.lists.map((list)=> {
                // return <p key={list.id}>{list.name}<button></button></p>
                return <List 
                            key={list.id}            
                            name={list.name}
                            dispatch={dispatch}
                            id={list.id}
                            confirmed={list.confirmed}
                        />
            } )}
        </div>
    )
}

export default UseReducer2;
