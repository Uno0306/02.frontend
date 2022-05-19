import React, {useReducer} from "react";
// import UseReducer2 from "./UseReducer2";
const ACTION_TYPES = {
    add: "add",
    remove: "remove"
};

const reducer = (state, action) => {
    const id = action.id -1
    console.log(id);
    // console.log(state);
    switch(action.type){
 
         case ACTION_TYPES.remove:
             console.log(state.lists);
             const filter = state.lists.filter(todo => todo.id != id);
             {console.log(filter);}
             state.lists = filter
            return state;
         default :
             return state;
    }
 }

const List = ( {key, props} ) => {
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

            {props.lists.map((obj) => {
                return(
                //     <span>${obj.id} </span>
                //     <span>${obj.name}</span>
                //     <button 
                //         onClick={() => {
                //             dispatch(type: ${ACTION_TYPES.remove}, id: ${obj.id})
                //         }}
                //     >
                //         삭제
                //     </button>
                // <br/>
                    <p key={obj.id}>
                        <span>{obj.id} </span>
                        <span>{obj.name}</span>
                        <button
                            onClick={() => {
                                dispatch({type: ACTION_TYPES.remove, id: obj.id})
                            }}
                        >
                            삭제
                        </button>
                        <br />
                        {/* <button 
                        onClick={() => {
                            dispatch(type: ${ACTION_TYPES.remove}, id: ${obj.id})
                        }}
                        >
                        삭제
                        </button>
                        <br/> */}
                    </p>
                );
            })}
        </div>
    )
}

export default List;
