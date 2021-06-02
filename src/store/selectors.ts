import { TState } from "types";

export const selecrorLoadingUserInfo = (state: TState) =>
  state.searchState.isLoadingUserInfo;

export const selecrorsLoadingUserRepos = (state: TState) =>
  state.searchState.isLoadingUserRepos;

export const selecrorsUserName = (state: TState) =>
  state.userData.userInfo.userNickName;

export const selecrorsNumberOfRepositories = (state: TState) =>
  state.userData.userInfo.publickRepos;

export const selecrorsUserNotFound = (state: TState) =>
  state.searchState.isUserNotFound;

export const selecrorsUserData = (state: TState) => state.userData;
