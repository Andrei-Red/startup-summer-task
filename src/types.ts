export type TSearchInfo = {
  inputText: String;
  isError: boolean;
  isLoading: boolean;
};

export type TAction = { type: String; payload: unknown };

export type TUserInfo = {
  userName: String;
  userNickName: String;
  userURL: String;
  userAvatarURL: String;
  userFoloving: Number | null;
  userFolovers: Number | null;
};

export type TState = {
  searchText: TSearchInfo;
  userInfo: TUserInfo;
};
