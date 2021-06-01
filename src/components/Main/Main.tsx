import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import { MAX_REPOS_ON_PAGE } from "appConstants/constants";
import { getUserRepos } from "store/actions";
import { pageRange } from "utils/pageRange";
import { Content, Header } from "./components";
import { TState } from "../../types";

export const Main: FC = () => {
  const userData = useSelector((state: TState) => state.userData);
  const isLoading = useSelector((state: TState) => state.searchState.isLoading);

  const [paginateCurrentPage, setPaginateCurrentPage] = useState(1);

  const arrUserRepos = useSelector((state: TState) => state.userData.userRepos);
  const userName = useSelector(
    (state: TState) => state.userData.userInfo.userNickName
  );
  const numberOfRepositories = useSelector(
    (state: TState) => state.userData.userInfo.publickRepos
  );

  const paginateInfoObj = pageRange(numberOfRepositories, paginateCurrentPage);

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
      dispanch(getUserRepos(userName, paginateCurrentPage, MAX_REPOS_ON_PAGE));
    }
  }, [paginateCurrentPage]);

  return (
    <>
      <Header />
      {isLoading ? (
        <>
          <LinearProgress />
          <LinearProgress color="secondary" />
        </>
      ) : (
        <Content
          userData={userData}
          isStatrPage={isStatrPage}
          numberOfReposPage={numberOfReposPage}
          paginateCurrentPage={paginateCurrentPage}
          handlePageClick={handlePageClick}
          paginateInfoObj={paginateInfoObj}
        />
      )}
    </>
  );
};
