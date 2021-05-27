import { TAction, TUserInfo, TSearchText } from "../types";
import { SET_SEARCH_TEXT, SET_USER_UNFO } from "./actionsConstants";

const defaultSearchText: TSearchText = {
  inputText: "",
};

export const searchReducer = (state = defaultSearchText, action: TAction) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};
