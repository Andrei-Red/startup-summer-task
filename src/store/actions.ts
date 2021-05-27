import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import {
  SET_SEARCH_TEXT,
  SET_USER_UNFO,
  SET_ERROR_REQUEST,
} from "./actionsConstants";
import { TUserInfo } from "../types";

export const setSearchText = (payload: string) => ({
  type: SET_SEARCH_TEXT,
  payload,
});

export const setErrorRequest = (payload: boolean) => ({
  type: SET_ERROR_REQUEST,
  payload,
});

export const setUserInfo = (payload: TUserInfo) => ({
  type: SET_USER_UNFO,
  payload,
});

export const getUserInfo = (): ThunkAction<
  void,
  unknown,
  unknown,
  Action<string>
> => {
  const t = 1;
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/Andrei1079`
      );
      const {
        name: userName,
        avatar_url: userAvatarURL,
        followers: userFolovers,
        following: userFoloving,
        login: userNickName,
        html_url: userURL,
      } = response.data;

      dispatch(
        setUserInfo({
          userName,
          userNickName,
          userURL,
          userAvatarURL,
          userFoloving,
          userFolovers,
        })
      );
    } catch (err) {
      const status = err?.response?.status;
      if (status >= 400) {
        console.log("ERROR gj");
        console.log(status);
        dispatch(setErrorRequest(true));
      }
      // dispatch(setStatisticsError(err));
      // return;
    }
  };
};
