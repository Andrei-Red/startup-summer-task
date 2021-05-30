import React, { FC, useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TState, TUserInfo, TUserReposArray } from "types";
import { MAX_REPOS_ON_PAGE } from "appConstants/constants";
import { getUserRepos } from "store/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Typography, Box, Link, CardMedia } from "@material-ui/core";
import { StartPage, UserContent } from "./components";

type ContentProps = {
  userData: { userInfo: TUserInfo; userRepos: TUserReposArray };
  isStatrPage: boolean;
  numberOfReposPage: number;
  paginateCurrentPage: number;
  handlePageClick: (data: { selected: number }) => void;
};

export const Content: FC<ContentProps> = ({
  userData,
  isStatrPage,
  numberOfReposPage,
  paginateCurrentPage,
  handlePageClick,
}) => {
  const { userInfo, userRepos } = userData;
  /*  const [paginateCurrentPage, setPaginateCurrentPage] = useState(1);

  const arrUserRepos = useSelector((state: TState) => state.userData.userRepos);
  const userName = useSelector(
    (state: TState) => state.userData.userInfo.userNickName
  );
  const numberOfRepositories = useSelector(
    (state: TState) => state.userData.userInfo.publickRepos
  );

  const numberOfReposPage = Math.ceil(
    (numberOfRepositories || 1) / MAX_REPOS_ON_PAGE
  );

  const isStatrPage = userName === "";

  const dispanch = useDispatch();

  const handlePageClick = (data: { selected: number }) => {
    const { selected } = data;
    setPaginateCurrentPage(selected + 1);
  };

  useEffect(() => {
    if (!isStatrPage) {
      console.log("qury");
      // dispanch(getUserRepos(userName, paginateCurrentPage, MAX_REPOS_ON_PAGE));
    }
  }, [paginateCurrentPage]);
 */

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
        />
      )}
    </>
  );
};

// isStatrPage ? (<StartPage />) : (<UserContent/>)

/* isStatrPage ? (
  <StartPage />
) : (
  <h1>content</h1>
) */

/* isStatrPage ? (
  <StartPage />
) : (
  <h1>content</h1>
) */

/*  */
