import { LatLngTuple } from 'leaflet';

import { DataTableType } from '../components/XTable/XTable';

export function getCurrentRouteMarks(currentRoute: DataTableType): LatLngTuple[] {
  return [
    currentRoute.point1 as LatLngTuple,
    currentRoute.point2 as LatLngTuple,
    currentRoute.point3 as LatLngTuple,
  ];
}
