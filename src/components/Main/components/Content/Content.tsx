import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { TState, TUserInfo, TUserReposArray } from "types";
import { MAX_REPOS_ON_PAGE } from "appConstants/constants";
import { getUserRepos } from "store/actions";
import LinearProgress from "@material-ui/core/LinearProgress";

type ContentProps = {
  userData: { userInfo: TUserInfo; userRepos: TUserReposArray };
};

export const Content: FC<ContentProps> = ({ userData }) => {
  const [paginateCurrentPage, setPaginateCurrentPage] = useState(1);

  const dispanch = useDispatch();

  const isLoading = useSelector((state: TState) => state.searchState.isLoading);
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

  const handlePageClick = (data: { selected: number }) => {
    const { selected } = data;
    setPaginateCurrentPage(selected + 1);
  };

  useEffect(() => {
    dispanch(getUserRepos(userName, paginateCurrentPage, MAX_REPOS_ON_PAGE));
  }, [paginateCurrentPage]);

  return (
    <>
      <h1>content</h1>
      <h5>{userData.userInfo.userName}</h5>

      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={numberOfReposPage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={paginateCurrentPage}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />

      {isLoading ? (
        <>
          <LinearProgress />
          <LinearProgress color="secondary" />
        </>
      ) : (
        <div>
          <h4>REPOS</h4>
          {arrUserRepos.map((repo) => (
            <>
              <div key={repo.repoUrl}>
                <h5>Repo name {repo.name}</h5>
                <p>description {repo.description}</p>
              </div>
              <br />
            </>
          ))}
        </div>
      )}
    </>
  );
};
