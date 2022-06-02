export type PointNavigationProps = {
  id?: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      search: PointNavigationProps;
    }
  }
}