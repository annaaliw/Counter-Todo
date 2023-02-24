import React, { useState } from "react";
import InputField from "./inputField.js";
import ItemList from "./itemList.js";

const TdList = () => {
  const [list, setList] = useState([]);

  const addToListHandler = (item) => {
    setList((prevList) => {
      return [item, ...prevList];
    });
    // console.log(list);
  };

  const removeItemHandler = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  //Need improvement
  const sortListHandler = (typeSort) => {
    if (typeSort === "") return;
    if (
      typeSort === "a-z"
        ? setList([...list].sort())
        : setList([...list].reverse())
    );
  };

  return (
    <div>
      <InputField
        onSortList={sortListHandler}
        onAddToList={addToListHandler}
      ></InputField>
      <ItemList onRemoveItem={removeItemHandler} items={list} />
    </div>
  );
};
export default TdList;
