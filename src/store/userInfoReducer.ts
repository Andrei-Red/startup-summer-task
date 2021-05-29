import { SET_USER_UNFO, SET_USER_REPOS } from "./actionsConstants";
import { TUserInfo, TAction } from "../types";

const defaultUserInfo = {
  userInfo: {
    userName: "",
    userNickName: "",
    userURL: "",
    userAvatarURL: "",
    userFoloving: null,
    userFolovers: null,
    publickRepos: null,
  },
  userRepos: [],
};

export const userUnfoReducer = (state = defaultUserInfo, action: TAction) => {
  switch (action.type) {
    case SET_USER_UNFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case SET_USER_REPOS:
      return {
        ...state,
        userRepos: action.payload,
      };
    default:
      return state;
  }
};
