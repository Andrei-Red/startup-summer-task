import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import {
  MAX_REPOS_ON_PAGE,
  PAGINATION_START_PAGE,
} from "appConstants/constants";
import { getUserRepos } from "store/actions";
import {
  selecrorLoadingUserInfo,
  selecrorsLoadingUserRepos,
  selecrorsUserName,
  selecrorsNumberOfRepositories,
  selecrorsUserNotFound,
} from "store/selectors";
import { TState } from "types";
import { calculatePageRange } from "utils/calculatePageRange";
import { Content, Header } from "./components";

export const Main: FC = () => {
  const userData = useSelector((state: TState) => state.userData);
  const [paginateCurrentPage, setPaginateCurrentPage] = useState(
    PAGINATION_START_PAGE
  );

  const userName = useSelector(selecrorsUserName);
  const numberOfRepositories = useSelector(selecrorsNumberOfRepositories);
  const isLoadingUserInfo = useSelector(selecrorLoadingUserInfo);
  const isLoadingUserRepos = useSelector(selecrorsLoadingUserRepos);
  const isUserNotFound = useSelector(selecrorsUserNotFound);
  const isStatrPage = userName === "";

  const paginateInfoObj = calculatePageRange(
    numberOfRepositories,
    paginateCurrentPage
  );

  const numberOfReposPage = Math.ceil(
    (numberOfRepositories || 1) / MAX_REPOS_ON_PAGE
  );

  const dispanch = useDispatch();

  const handlePageClick = (data: { selected: number }) => {
    const { selected } = data;
    setPaginateCurrentPage(selected + 1);
  };

  useEffect(() => {
    if (!isStatrPage) {
      dispanch(getUserRepos(userName, paginateCurrentPage, MAX_REPOS_ON_PAGE));
    }
  }, [dispanch, isStatrPage, paginateCurrentPage, userName]);

  return (
    <>
      <Header setPaginateCurrentPage={setPaginateCurrentPage} />
      {isLoadingUserInfo ? (
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
          isLoadingUserRepos={isLoadingUserRepos}
          isUserNotFound={isUserNotFound}
        />
      )}
    </>
  );
};
