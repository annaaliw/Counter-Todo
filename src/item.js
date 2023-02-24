import React from "react";
const Item = (props) => {
  const removeItemHandler = (id) => {
    props.onDelete(id);
    // console.log(id)
  };
  return (
    <li>
      {props.todo}
      <button onClick={() => removeItemHandler(props.id)}>Delete</button>
    </li>
  );
};
export default Item;
