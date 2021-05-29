import { TAction, TSearchInfo } from "../types";
import { SET_ERROR_REQUEST, SET_LOADIND } from "./actionsConstants";

const defaultSearchInfo: TSearchInfo = {
  isError: false,
  isLoading: false,
};

export const searchReducer = (state = defaultSearchInfo, action: TAction) => {
  switch (action.type) {
    case SET_ERROR_REQUEST:
      return {
        ...state,
        isError: action.payload,
      };
    case SET_LOADIND:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
