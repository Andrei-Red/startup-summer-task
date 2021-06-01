import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import { CardMedia, Typography, Box, Link, Paper } from "@material-ui/core";
import ARROW_LEFT from "assets/arrow/arrow-left.svg";
import ARROW_RIGHT from "assets/arrow/arrow-right.svg";
import EMPTY_IMG from "assets/img/empty.svg";
import { TUserInfo, TUserReposArray } from "types";
import { useStyles } from "./styled";

type UserReposProps = {
  userInfo: TUserInfo;
  userRepos: TUserReposArray;
  numberOfReposPage: number;
  paginateCurrentPage: number;
  handlePageClick: (data: { selected: number }) => void;
  paginateInfoObj: { firstPage: number; lastPage: number; allRrpos: number };
};

export const UserRepos: FC<UserReposProps> = ({
  userInfo,
  userRepos,
  numberOfReposPage,
  paginateCurrentPage,
  handlePageClick,
  paginateInfoObj,
}) => {
  const isUsreRepos = Boolean(userRepos.length);
  const classes = useStyles();

  const userReposHTML = userRepos.map((repo) => (
    <Paper
      elevation={2}
      key={repo.repoUrl}
      className={classes.wrapperRepoContainer}
    >
      <Box className={classes.repoContent}>
        <Link href={repo.repoUrl} target="_blank" className={classes.repoName}>
          {repo.name}
        </Link>
        <Typography className={classes.repoDiscription}>
          {repo.description ? repo.description : "No description"}
        </Typography>
      </Box>
    </Paper>
  ));

  return (
    <>
      {isUsreRepos && (
        <>
          <Box>
            <Typography className={classes.title}>
              Repositories ({userInfo.publickRepos})
            </Typography>
          </Box>
          {userReposHTML}
          <Box className={classes.paginateContainer}>
            <Box>
              <Typography className={classes.paginateInfo}>
                {paginateInfoObj.firstPage}-{paginateInfoObj.lastPage} of{" "}
                {paginateInfoObj.allRrpos} items
              </Typography>
            </Box>
            <Box>
              <ReactPaginate
                previousLabel={
                  <CardMedia
                    className={classes.arrow}
                    image={ARROW_LEFT}
                    title="arrow-lefr"
                  />
                }
                nextLabel={
                  <CardMedia
                    className={classes.arrow}
                    image={ARROW_RIGHT}
                    title="arrow-right"
                  />
                }
                breakLabel="..."
                breakClassName="break-me"
                pageCount={numberOfReposPage}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                initialPage={paginateCurrentPage - 1}
                onPageChange={handlePageClick}
                containerClassName={classes.containerClassName}
                activeClassName={classes.activ}
                pageClassName={classes.pageClassName}
                pageLinkClassName={classes.pageLinkClassName}
                previousClassName={classes.previousClassName}
                nextClassName={classes.nextClassName}
                disabledClassName={classes.disabledClassName}
              />
            </Box>
          </Box>
        </>
      )}
      {!isUsreRepos && (
        <>
          <Box className={classes.wrapperRmptyPage}>
            <CardMedia
              className={classes.emptyImg}
              image={EMPTY_IMG}
              title="empty-img"
            />
            <Typography className={classes.emptyTitle}>
              Repository list is empty
            </Typography>
          </Box>
        </>
      )}
    </>
  );
};
