import { SET_SEARCH_TEXT, SET_USER_UNFO } from "./actionsConstants";
import { TUserInfo, TAction } from "../types";

const defaultUserInfo = {
  userInfo: {
    userName: "",
    userNickName: "",
    userURL: "",
    userAvatarURL: "",
    userFoloving: null,
    userFolovers: null,
  },
};

export const userUnfoReducer = (state = defaultUserInfo, action: TAction) => {
  switch (action.type) {
    case SET_USER_UNFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};
