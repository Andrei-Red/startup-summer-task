import React, { FC } from "react";
import { CardMedia, Typography, Box, Link } from "@material-ui/core";
import { transformationFolowers } from "utils/transformationFolowers";
import FOLLOWERS_IMG from "assets/img/followers.svg";
import FOLOWING_IMG from "assets/img/folowing.svg";
import { TUserInfo } from "types";
import { useStyles } from "./styled";

type UserInfoProps = {
  userInfo: TUserInfo;
};

export const UserInfo: FC<UserInfoProps> = ({ userInfo }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperUserInfo}>
      <Box className={classes.wrapperUserNameAndAvatar}>
        <CardMedia
          className={classes.avatar}
          image={userInfo.userAvatarURL}
          title="user-avetar"
        />
        <Box className={classes.wrapperUserNameAndLink}>
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
        </Box>
      </Box>
      <Box className={classes.wrapperFollowersContainer}>
        <CardMedia
          className={classes.icon}
          image={FOLLOWERS_IMG}
          title="followers-icon"
        />
        <Typography className={classes.textFollowers}>
          {transformationFolowers(userInfo.userFolovers)} followers
        </Typography>

        <CardMedia
          className={classes.icon}
          image={FOLOWING_IMG}
          title="folowing-icon"
        />
        <Typography className={classes.textFollowers}>
          {transformationFolowers(userInfo.userFoloving)} following
        </Typography>
      </Box>
    </Box>
  );
};
