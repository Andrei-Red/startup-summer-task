import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import {
  SET_USER_UNFO,
  SET_ERROR_REQUEST,
  SET_USER_REPOS,
  SET_LOADIND,
} from "./actionsConstants";
import { TUserInfo, TUserRepo, TUserReposArray } from "../types";

/* export const setSearchText = (payload: string) => ({
  type: SET_SEARCH_TEXT,
  payload,
}); */

export const setErrorRequest = (payload: boolean) => ({
  type: SET_ERROR_REQUEST,
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: SET_LOADIND,
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
      dispatch(setLoading(true));
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
      /*       const responseUserRepos = await axios.get(
        `https://api.github.com/users/${searchUserName}/repos`
      );
      const reposInfo = responseUserRepos.data;
      const reposArray = reposInfo.map((repo: TUserRepo) => {
        const { name, html_url: repoUrl, description } = repo;
        return { name, repoUrl, description };
      });
      dispatch(setUserReros(reposArray));
      dispatch(setLoading(false));

      console.log("reposArray", reposArray); */
    } catch (err) {
      const status = err?.response?.status;
      if (status >= 400) {
        console.log("ERROR gj");
        console.log(status);
        dispatch(setErrorRequest(true));
        dispatch(setLoading(false));
      }
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
      dispatch(setLoading(true));
      const responseUserRepos = await axios.get(
        `https://api.github.com/users/${searchUserName}/repos?page=${currentPage}&per_page=${perPage}`
      );
      const reposInfo = responseUserRepos.data;
      const reposArray = reposInfo.map((repo: TUserRepo) => {
        const { name, html_url: repoUrl, description } = repo;
        return { name, repoUrl, description };
      });
      dispatch(setUserRepos(reposArray));
      dispatch(setLoading(false));

      console.log("reposArray", reposArray);
    } catch (err) {
      const status = err?.response?.status;
      if (status >= 400) {
        console.log("ERROR gj");
        console.log(status);
        dispatch(setErrorRequest(true));
        dispatch(setLoading(false));
      }
    }
  };

// `https://api.github.com/users/${searchUserName}/repos`
