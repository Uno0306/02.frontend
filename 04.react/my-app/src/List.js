import React, { useState} from "react";
import {useReducer} from "react";
// import UseReducer2 from "./UseReducer2";
const ACTION_TYPES = {
    add: "add",
    remove: "remove",
    run : "run"
};

// const reducer = (state, action) => {
//     console.log(state);
//     console.log(state.lists);
//     console.log(state.lists[0].confirmed);
//     const id = action.id -1;
//     // state.lists[id].confirmed = action.confirmed;
//     console.log(id);
//     // console.log(state);
    
//     switch(action.type){
 
//          case ACTION_TYPES.remove:
//             //  console.log(state);
//             //  console.log(state.lists);
//             //  const filter = state.lists.filter(todo => todo.id != id);
//             //  {console.log(filter);}
//             //  state.lists = filter

//             // const index = state.lists.findIndex(user => user.id === false);
//             // console.log(state);
//             // return state.lists.splice(index, 1);

//             // state.lists[id].confirmed = action.confirmed;

//             state.lists.forEach(element => {
//                 if(element.confirmed === false){
//                     const filter1 = state.lists.filter(element => element.confirmed != false);
//                     state.lists = filter1;
//                     return state
//                 }
//             });
//             return state = {count : state.lists.length-1 , 
//                             lists: [...state.lists, {
//                                 id: action.id.current,
//                                 name: action.name,
//                                 confirmed: true
//                             }]}

//          default :
//              return state;
//     }
//  }

// const ids = 0;

// const reducer = (state, action) => {
//     state = {count : action.count, 
//         lists :action.lists};
//         // .concat(actionArr)}
//      return state;   
// }




// var arr = {};

// var filter = {};
const List = ( {props} ) => {
    // const[cnt, setCnt] = useState(props.lists.length);
    // const[lis, setLis] = useState(props.lists)
    const [FList, setFList] = useState({
        // count: 1, 
        // lists : [
        //     {
        //         id: 1,
        //         name: 'ramen',
        //         confirmed: true
        //     }
        // ]
        count : props.lists.length, 
        lists: props.lists
    });

    
    // const [dis, dispatch] = useReducer(reducer, {count : props.lists.length, lists: props.lists});
    // dispatch({count: FList.count, lists: FList.lists})
    // console.log(dis);
    //     lists: props.lists); 
    
    // location.reload();
    // console.log(FList);

    // const [fList, setFList] = useState({
    //                                 count: 1, 
    //                                 lists : [
    //                                     {
    //                                         id: 1,
    //                                         name: 'ramen',
    //                                         confirmed: true
    //                                     }
    //                                 ]
    //                             });

    // console.log(props);
    // console.log("---");
    // const changeArr = (num) => {
    //     const filter = props.lists.filter(element => element.id != num+1);
    //     // console.log(filter.length);
    //     props = {count : filter.length , 
    //         lists: [...filter]};
        
    //     console.log(props);
            
    //     return props;    
    // }

    
    // console.log(FList);
    // console.log("FList");
    // console.log(props);
    // console.log("props");


    let removeHandler = (e) => {
        let x = e.target.getAttribute("removevalue");
        const filter = FList.lists.filter(element => element.id !== parseInt(x));
        setFList({
            count : filter.length,
            lists: filter
        });
        // console.log(filter);
        // dispacth({type:ACTION_TYPES.remote });
    }
    // console.log("filter");
    // console.log(FList);
    // console.log("fList2");
    
    // const changeArr = (num) => {
    //     filter = props.lists.filter(element => element.id != num+1);
    //     // console.log(filter.length);
    //     props = {count : filter.length , 
    //         lists: [...filter]};
        
    //     console.log(props);
    //     return setFList(props);
    //     // console.log(props);
            
    // }
    // const [fList, dispatch] = useReducer(reducer, props);



    // const [finalList3, setFinalList3] = useState(props);
    // {console.log(finalList3);}
    // const [finalList2, dispatch] = useReducer(reducer, props);
    // console.log(finalList2);
    // {console.log(finalList2);}
    // console.log(props);
    // console.log(props);

    // const removeGo = (num) => {
        
    // };
    // console.log(obj);

    // const useDispatch = (num) => {
    //     dispatch({type: ACTION_TYPES.remove, id: num, confirmed: false});
    // };

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

            {FList.lists.map((obj) => {
                // console.log(obj);
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
                    <div key={obj.id}>
                        {console.log(obj.id + " " + obj.name)}
                        <span>{obj.id} </span>
                        <span>{obj.name} </span>
                        <button
                            // onClick={() => {
                            //     // useDispatch(obj.id);
                            //     // dispatch({type: ACTION_TYPES.remove, id: obj.id, confirmed: false})
                            //     // console.log(obj.id-1);

                            //     // changeArr(obj.id-1);
                            //     // onRemove(obj.id);
                            //     // dispatch({type: ACTION_TYPES.remove, })
                            // }}
                            removevalue={obj.id}
                            onClick={removeHandler}
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
                    </div>
                );
            })}
            {/* {console.log(props)} */}
            {/* {console.log("ss")} */}
        </div>
    )
}

export default List;
