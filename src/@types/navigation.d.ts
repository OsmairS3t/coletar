import { IPlace } from "../utils/interface";

export type PointNavigationProps = {
  id?: string;
}

export type PointOnMapProps = {
  objPlace: IPlace;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      approutes: undefined;
      home: undefined;
      search: PointNavigationProps;
      locationpoint: undefined;
      detailpoint: IPlace;
      pointonmap: PointOnMapProps;
    }
  }
}