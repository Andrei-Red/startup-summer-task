import React, { FC } from "react";
import { TUserInfo, TUserReposArray } from "../../../../types";

type ContentProps = {
  userData: { userInfo: TUserInfo; userRepos: TUserReposArray };
};

export const Content: FC<ContentProps> = ({ userData }) => {
  const t = 1;
  console.log("userData.userInfo.userName", userData.userInfo.userName);

  return (
    <>
      <h1>content</h1>
      <h5>{userData.userInfo.userName}</h5>
    </>
  );
};
