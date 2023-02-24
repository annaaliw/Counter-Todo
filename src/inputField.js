import React, { useState } from "react";

const InputFiled = (props) => {
  const [enteredItem, setEnteredItem] = useState("");
  const addItemInput = (e) => {
    setEnteredItem(e.target.value);
    // console.log(enteredItem);
  };

  const addItemHandler = () => {
    const id = Math.random().toString();
    const newItem = {
      id: id,
      todo: enteredItem
    };
    props.onAddToList(newItem);
    setEnteredItem("");
    // console.log(newItem);
  };

  const sortItems = (e) => {
    props.onSortList(e.target.value);
  };

  return (
    <div>
      <input value={enteredItem} onChange={addItemInput}></input>
      <button onClick={addItemHandler}>Add</button>
      <select onChange={sortItems}>
        <option value="">Sort</option>
        <option value="a-z">A - Z</option>
        <option value="z-a">Z - A</option>
      </select>
    </div>
  );
};
export default InputFiled;
