import { TAction, TSearchInfo } from "../types";
import {
  SET_ERROR_REQUEST,
  SET_LOADIND_USER_INFO,
  SET_LOADIND_USER_REPOS,
  SET_ERROR_USER_NOT_FOUND,
} from "./actionsConstants";

const defaultSearchInfo: TSearchInfo = {
  isError: false,
  isUserNotFound: false,
  isLoadingUserInfo: false,
  isLoadingUserRepos: false,
};

export const searchReducer = (state = defaultSearchInfo, action: TAction) => {
  switch (action.type) {
    case SET_ERROR_REQUEST:
      return {
        ...state,
        isError: action.payload,
      };
    case SET_ERROR_USER_NOT_FOUND:
      return {
        ...state,
        isUserNotFound: action.payload,
      };
    case SET_LOADIND_USER_INFO:
      return {
        ...state,
        isLoadingUserInfo: action.payload,
      };
    case SET_LOADIND_USER_REPOS:
      return {
        ...state,
        isLoadingUserRepos: action.payload,
      };
    default:
      return state;
  }
};
