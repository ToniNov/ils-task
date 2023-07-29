export type RoutePointType = {
  pid: string;
  lat: number;
  lng: number;
};

export type RouteType = {
  id: string;
  points: RoutePointType[];
};

export type DataType = {
  data: RouteType[];
};

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
