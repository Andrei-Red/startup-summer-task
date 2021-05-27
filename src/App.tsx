import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "./store/actions";
import { State } from "./types";

function App() {
  const dispatch = useDispatch();
  const text = useSelector((state: State) => {
    console.log("state", state.inputText.searchText);
    return state.inputText.searchText;
  });

  const clickHandler = () => {
    console.log("ok click");
    dispatch(setSearchText("Hello"));
  };
  return (
    <>
      <h1>Test1</h1>
      <button type="button" onClick={clickHandler}>
        test
      </button>
      <h1>{text}</h1>
    </>
  );
}

export default App;
