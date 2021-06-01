import React, { FC } from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { TUserInfo, TUserReposArray } from "types";
import { useStyles } from "./styled";
import { UserInfo, UserRepos } from "./componemts";

type UserContentProps = {
  userData: { userInfo: TUserInfo; userRepos: TUserReposArray };
  numberOfReposPage: number;
  paginateCurrentPage: number;
  handlePageClick: (data: { selected: number }) => void;
  paginateInfoObj: { firstPage: number; lastPage: number; allRrpos: number };
  isLoadingUserRepos: boolean;
};

export const UserContent: FC<UserContentProps> = ({
  userData,
  numberOfReposPage,
  paginateCurrentPage,
  handlePageClick,
  paginateInfoObj,
  isLoadingUserRepos,
}) => {
  const { userInfo, userRepos } = userData;

  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} md={5} className={classes.wrapper}>
        <UserInfo userInfo={userInfo} />
      </Grid>
      <Grid item xs={12} md={7}>
        {isLoadingUserRepos ? (
          <>
            <LinearProgress />
            <LinearProgress color="secondary" />
          </>
        ) : (
          <UserRepos
            userInfo={userInfo}
            userRepos={userRepos}
            numberOfReposPage={numberOfReposPage}
            paginateCurrentPage={paginateCurrentPage}
            handlePageClick={handlePageClick}
            paginateInfoObj={paginateInfoObj}
          />
        )}
      </Grid>
    </Grid>
  );
};
