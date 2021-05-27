import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { SET_SEARCH_TEXT, SET_USER_UNFO } from "./actionsConstants";
import { userUnfoReducer } from "./userInfoReducer";
import { TUserInfo } from "../types";

export const setSearchText = (payload: string) => ({
  type: SET_SEARCH_TEXT,
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
    const response = await axios.get(`https://api.github.com/users/Andrei107Q`);

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
  };
};
