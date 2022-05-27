import React from "react";

const ACTION_TYPE = {
  add: "add-list",
  delete: "delete-list",
  alter: "confirmed-list"
};

const List = ({ id, name, confirmed, dispatch }) => {
  // console.log();
  return (
    <div>
      <span
        style={{
          textDecoration: confirmed ? "none" : "line-through",
          color: confirmed ? "black" : "red"
        }}
        onClick={() =>
          dispatch({
            type: ACTION_TYPE.alter,
            id: { id },
            confirmed: { confirmed }
          })
        }
      >
        {name}
      </span>
      <button
        onClick={() => dispatch({ type: ACTION_TYPE.delete, id: { id } })}
      >
        삭제
      </button>
    </div>
  );
};

export default List;
