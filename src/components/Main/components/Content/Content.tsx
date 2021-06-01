import React, { FC, useEffect, useState, useCallback } from "react";
import { TState, TUserInfo, TUserReposArray } from "types";
import { StartPage, UserContent } from "./components";

type ContentProps = {
  userData: { userInfo: TUserInfo; userRepos: TUserReposArray };
  isStatrPage: boolean;
  numberOfReposPage: number;
  paginateCurrentPage: number;
  handlePageClick: (data: { selected: number }) => void;
  paginateInfoObj: { firstPage: number; lastPage: number; allRrpos: number };
};

export const Content: FC<ContentProps> = ({
  userData,
  isStatrPage,
  numberOfReposPage,
  paginateCurrentPage,
  handlePageClick,
  paginateInfoObj,
}) => {
  const { userInfo, userRepos } = userData;

  return (
    <>
      {isStatrPage ? (
        <StartPage />
      ) : (
        <UserContent
          userData={userData}
          numberOfReposPage={numberOfReposPage}
          paginateCurrentPage={paginateCurrentPage}
          handlePageClick={handlePageClick}
          paginateInfoObj={paginateInfoObj}
        />
      )}
    </>
  );
};
