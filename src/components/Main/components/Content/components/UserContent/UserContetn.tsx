import React, { FC } from "react";

import {
  CardMedia,
  Typography,
  Box,
  Link,
  Grid,
  Paper,
} from "@material-ui/core";

import { TUserInfo, TUserReposArray } from "types";
import { useStyles } from "./styled";
import { UserInfo, UserRepos } from "./componemts";

type UserContentProps = {
  userData: { userInfo: TUserInfo; userRepos: TUserReposArray };
  numberOfReposPage: number;
  paginateCurrentPage: number;
  handlePageClick: (data: { selected: number }) => void;
  paginateInfoObj: { firstPage: number; lastPage: number; allRrpos: number };
};

export const UserContent: FC<UserContentProps> = ({
  userData,
  numberOfReposPage,
  paginateCurrentPage,
  handlePageClick,
  paginateInfoObj,
}) => {
  const { userInfo, userRepos } = userData;

  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} md={5}>
        <UserInfo userInfo={userInfo} />
      </Grid>
      <Grid item xs={12} md={7}>
        <UserRepos
          userRepos={userRepos}
          numberOfReposPage={numberOfReposPage}
          paginateCurrentPage={paginateCurrentPage}
          handlePageClick={handlePageClick}
          paginateInfoObj={paginateInfoObj}
        />
      </Grid>
    </Grid>
  );
};
