import React, { FC } from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { searchReducer } from "./searchReducer";
import { userUnfoReducer } from "./userInfoReducer";

const rootReducer = combineReducers({
  searchText: searchReducer,
  userData: userUnfoReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const ReduxProvider: FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
