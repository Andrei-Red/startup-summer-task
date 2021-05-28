import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Content, Header } from "./components";
import { TState } from "../../types";

export const Main: FC = () => {
  const userData = useSelector((state: TState) => state.userData);
  console.log("userData", userData);

  return (
    <>
      <Header />
      <Content userData={userData} />
    </>
  );
};
