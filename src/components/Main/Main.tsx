import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import {
  MAX_REPOS_ON_PAGE,
  PAGINATION_START_PAGE,
} from "appConstants/constants";
import { getUserRepos, getUserInfo } from "store/actions";
import {
  selecrorLoadingUserInfo,
  selecrorsLoadingUserRepos,
  selecrorsUserName,
  selecrorsNumberOfRepositories,
  selecrorsUserNotFound,
  selecrorsUserData,
} from "store/selectors";
import { calculatePageRange } from "utils/calculatePageRange";
import { Content, Header } from "./components";

export const Main: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [paginateCurrentPage, setPaginateCurrentPage] = useState(
    PAGINATION_START_PAGE
  );

  const userData = useSelector(selecrorsUserData);
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

  const dispatch = useDispatch();

  const submitForm = () => {
    dispatch(getUserInfo(inputValue));
    dispatch(getUserRepos(inputValue, 1, MAX_REPOS_ON_PAGE));
    setPaginateCurrentPage(PAGINATION_START_PAGE);
    setInputValue("");
  };

  const handlePageClick = (data: { selected: number }) => {
    const { selected } = data;
    setPaginateCurrentPage(selected + 1);
  };

  useEffect(() => {
    if (!isStatrPage) {
      dispatch(getUserRepos(userName, paginateCurrentPage, MAX_REPOS_ON_PAGE));
    }
  }, [dispatch, isStatrPage, paginateCurrentPage, userName]);

  return (
    <>
      <Header
        setInputValue={setInputValue}
        submitForm={submitForm}
        inputValue={inputValue}
      />
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
