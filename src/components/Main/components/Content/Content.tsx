import React, { FC } from "react";
import { TUserInfo, TUserReposArray } from "types";
import { StartPage, UserContent } from "./components";

type ContentProps = {
  userData: { userInfo: TUserInfo; userRepos: TUserReposArray };
  isStatrPage: boolean;
  numberOfReposPage: number;
  paginateCurrentPage: number;
  handlePageClick: (data: { selected: number }) => void;
  paginateInfoObj: { firstPage: number; lastPage: number; allRrpos: number };
  isLoadingUserRepos: boolean;
};

export const Content: FC<ContentProps> = ({
  userData,
  isStatrPage,
  numberOfReposPage,
  paginateCurrentPage,
  handlePageClick,
  paginateInfoObj,
  isLoadingUserRepos,
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
          isLoadingUserRepos={isLoadingUserRepos}
        />
      )}
    </>
  );
};
