import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import {
  CardMedia,
  Typography,
  Box,
  Link,
  Grid,
  Paper,
} from "@material-ui/core";
import FOLLOWERS_IMG from "assets/img/followers.svg";
import FOLOWING_IMG from "assets/img/folowing.svg";
import { TState, TUserInfo, TUserReposArray } from "types";

import { useStyles } from "./styled";

type UserContentProps = {
  userData: { userInfo: TUserInfo; userRepos: TUserReposArray };
  numberOfReposPage: number;
  paginateCurrentPage: number;
  handlePageClick: (data: { selected: number }) => void;
};

export const UserContent: FC<UserContentProps> = ({
  userData,
  numberOfReposPage,
  paginateCurrentPage,
  handlePageClick,
}) => {
  const { userInfo, userRepos } = userData;

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={5}>
        <Box className={classes.wrapperUserInfo}>
          <CardMedia
            className={classes.avatar}
            image={userInfo.userAvatarURL}
            title="user-avetar"
          />
          <Typography className={classes.userName}>
            {userInfo.userName ? userInfo.userName : "No name"}
          </Typography>
          <Link
            href={userInfo.userURL}
            target="_blank"
            className={classes.userLink}
          >
            {userInfo.userNickName}
          </Link>
          <Box className={classes.wrapperFollowersContainer}>
            <CardMedia
              className={classes.icon}
              image={FOLLOWERS_IMG}
              title="followers-icon"
            />
            <Typography className={classes.textFollowers}>
              {String(userInfo.userFolovers)} followers
            </Typography>

            <CardMedia
              className={classes.icon}
              image={FOLOWING_IMG}
              title="folowing-icon"
            />
            <Typography className={classes.textFollowers}>
              {String(userInfo.userFoloving)} followers
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={7}>
        <Box>
          <Typography className={classes.title}>
            Repositories ({userInfo.publickRepos})
          </Typography>
        </Box>
        {userRepos.map((repo) => (
          <Paper
            elevation={2}
            key={repo.repoUrl}
            className={classes.wrapperRepoContainer}
          >
            <Box className={classes.repoContent}>
              <Link
                href={repo.repoUrl}
                target="_blank"
                className={classes.repoName}
              >
                {repo.name}
              </Link>
              <Typography className={classes.repoDiscription}>
                {repo.description ? repo.description : "No description"}
              </Typography>
            </Box>
          </Paper>
        ))}
        <Box>
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={numberOfReposPage}
            marginPagesDisplayed={1}
            pageRangeDisplayed={paginateCurrentPage}
            onPageChange={handlePageClick}
            containerClassName={classes.test}
            activeClassName="active"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

/* {arrUserRepos.map((repo) => (
  <>
    <div key={repo.repoUrl}>
      <h5>Repo name {repo.name}</h5>
      <p>description {repo.description}</p>
    </div>
    <br />
  </>
))} */

/* <ReactPaginate
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
/> */
