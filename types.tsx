export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Auth: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TabOne: undefined;
  Search: undefined;
  Downloads: undefined;
};

type Action = {
  type: string;
  token: string;
};

export type AuthParams = {
  signIn: (data?: any) => Promise<Action>;
  signOut: (data?: any) => Promise<Action>;
  signUp: (data?: any) => Promise<Action>;
};

export type HomeParamList = {
  HomeScreen: undefined;
  ArticleDetailsScreen: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
