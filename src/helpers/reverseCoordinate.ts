import { LatLngTuple } from 'leaflet';

export const reverseCoordinate = (coordinates: LatLngTuple[]): LatLngTuple[] => {
  return coordinates.map(([lat, lng]) => [lng, lat]);
};
