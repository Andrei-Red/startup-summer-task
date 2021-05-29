export type TSearchInfo = {
  isError: boolean;
  isLoading: boolean;
};

export type TAction = { type: string; payload: unknown };

export type TUserInfo = {
  userName: string;
  userNickName: string;
  userURL: string;
  userAvatarURL: string;
  userFoloving: number | null;
  userFolovers: number | null;
  publickRepos: number | null;
};

export type TUserRepo = {
  name: string;
  html_url: string;
  repoUrl: string;
  description: string;
};

export type TUserReposArray = [TUserRepo];
/* export type TUserReposArray = {
  currentPage: Number;
  perPage: Number;
}; */

export type TState = {
  searchState: TSearchInfo;
  userData: { userInfo: TUserInfo; userRepos: TUserReposArray };
};
