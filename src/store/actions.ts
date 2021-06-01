import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import {
  SET_USER_UNFO,
  SET_ERROR_REQUEST,
  SET_USER_REPOS,
  SET_LOADIND_USER_INFO,
  SET_LOADIND_USER_REPOS,
  SET_ERROR_USER_NOT_FOUND,
} from "./actionsConstants";
import { TUserInfo, TUserRepo, TUserReposArray } from "../types";

export const setErrorRequest = (payload: boolean) => ({
  type: SET_ERROR_REQUEST,
  payload,
});

export const setErrorUserNotFound = (payload: boolean) => ({
  type: SET_ERROR_USER_NOT_FOUND,
  payload,
});

export const setLoadingUserInfo = (payload: boolean) => ({
  type: SET_LOADIND_USER_INFO,
  payload,
});

export const setLoadingUserRepos = (payload: boolean) => ({
  type: SET_LOADIND_USER_REPOS,
  payload,
});

export const setUserInfo = (payload: TUserInfo) => ({
  type: SET_USER_UNFO,
  payload,
});

export const setUserRepos = (payload: TUserReposArray) => ({
  type: SET_USER_REPOS,
  payload,
});

export const getUserInfo = (
  searchUserName: String
): ThunkAction<void, unknown, unknown, Action<string>> => {
  const t = 1;
  return async (dispatch) => {
    try {
      dispatch(setLoadingUserInfo(true));
      dispatch(setErrorUserNotFound(false));

      const responseUserInfo = await axios.get(
        `https://api.github.com/users/${searchUserName}`
      );
      const {
        name: userName,
        avatar_url: userAvatarURL,
        followers: userFolovers,
        following: userFoloving,
        login: userNickName,
        html_url: userURL,
        public_repos: publickRepos,
      } = responseUserInfo.data;

      dispatch(
        setUserInfo({
          userName,
          userNickName,
          userURL,
          userAvatarURL,
          userFoloving,
          userFolovers,
          publickRepos,
        })
      );
      dispatch(setLoadingUserInfo(false));
    } catch (err) {
      const status = err?.response?.status;
      if (status === 404) {
        dispatch(setErrorUserNotFound(true));
      } else {
        dispatch(setErrorRequest(true));
      }
      dispatch(setLoadingUserInfo(false));
    }
  };
};

export const getUserRepos =
  (
    searchUserName: String,
    currentPage: Number = 1,
    perPage: Number = 100
  ): ThunkAction<void, unknown, unknown, Action<string>> =>
  async (dispatch) => {
    try {
      dispatch(setLoadingUserRepos(true));
      const responseUserRepos = await axios.get(
        `https://api.github.com/users/${searchUserName}/repos?page=${currentPage}&per_page=${perPage}`
      );
      const reposInfo = responseUserRepos.data;
      const reposArray = reposInfo.map((repo: TUserRepo) => {
        const { name, html_url: repoUrl, description } = repo;
        return { name, repoUrl, description };
      });
      dispatch(setUserRepos(reposArray));
      dispatch(setLoadingUserRepos(false));
    } catch (err) {
      const status = err?.response?.status;
      if (status >= 400) {
        dispatch(setErrorRequest(true));
      }
      dispatch(setLoadingUserRepos(false));
    }
  };
