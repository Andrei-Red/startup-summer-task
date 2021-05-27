import { TSearchText, TAction } from "../types";
import { SET_SEARCH_TEXT } from "./actions";

const defaultSearchText: TSearchText = {
  searchText: "",
};

export const searchTextReducer = (
  state = defaultSearchText,
  action: TAction
) => {
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
