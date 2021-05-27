import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputAdornment, OutlinedInput } from "@material-ui/core";
import { getUserInfo } from "../../store/actions";

export const Header: FC = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state);
  console.log("userInfo", userInfo);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value", e.target.value);
    const searchText = e.target.value;
    setInputValue(searchText);
  };

  const submitFormHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("inputValue", inputValue);
  };

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <>
      <h1>Header1</h1>
      <form onSubmit={submitFormHandler}>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={inputValue}
          onChange={inputHandler}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={60}
        />
      </form>
    </>
  );
};
