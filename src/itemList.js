import React from "react";
import Item from "./item.js";

const ItemList = (props) => {
  const deleteHandler = (id) => {
    props.onRemoveItem(id);
  };
  return (
    <ul>
      {props.items.map((item) => (
        <Item
          onDelete={deleteHandler}
          key={item.id}
          id={item.id}
          todo={item.todo}
        />
      ))}
    </ul>
  );
};

export default ItemList;
