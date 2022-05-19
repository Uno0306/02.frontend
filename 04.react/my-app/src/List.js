import React, {useReducer} from "react";
// import UseReducer2 from "./UseReducer2";
const ACTION_TYPES = {
    add: "add",
    remove: "remove"
};

const reducer = (state, action) => {
    const id = action.id -1
    console.log(state);
    switch(action.type){
 
         case ACTION_TYPES.remove:
            return Array.isArray(state.iists.filter(list => list.id != id));
         default :
             return state;
    }
 }

const List = ( {props} ) => {
    const [finalList2, dispatch] = useReducer(reducer, props);


    // console.log(obj);
    return(
        <div>
            
            {/* <span>{obj.id} </span>
            <span>{name}</span>
            <button 
                onClick={() => {
                    dispatch({type: ACTION_TYPES.remove, id: obj.id})
                }}
            >
                삭제
            </button>
            <br/> */}

            {/* {props.lists.map((obj) => {   
                    <span>${obj.id} </span>
                    <span>${obj.name}</span>
                    <button 
                        onClick={() => {
                            dispatch(type: ${ACTION_TYPES.remove}, id: ${obj.id})
                        }}
                    >
                        삭제
                    </button>
                <br/>
            })} */}


            
        </div>
    )
}

export default List;
