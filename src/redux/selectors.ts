import { LatLngTuple } from 'leaflet';

import { DataTableType } from '../components/XTable/XTable';

import { RoutesState } from './features/routes/routesSlice';
import { RootState } from './store';

export const routesSelector = (state: RootState): RoutesState => state.routes;
export const currentRouteSelector = (state: RootState): DataTableType =>
  state.currentRoute.currentRoute;
export const polylineSelector = (state: RootState): LatLngTuple[] =>
  state.currentRoute.polyline;
