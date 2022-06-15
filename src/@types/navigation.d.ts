export type PointNavigationProps = {
  id?: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      approutes: undefined;
      home: undefined;
      search: PointNavigationProps;
      locationpoint: undefined;
    }
  }
}