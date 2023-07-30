import { LatLngTuple } from 'leaflet';

export const findeCenter = (coordinates: LatLngTuple[]): [number, number] => {
  if (!coordinates || !coordinates.length) {
    return [59.9386, 30.3141];
  }

  const latitudes = coordinates.map((point) => point[0]);
  const longitudes = coordinates.map((point) => point[1]);

  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);

  const centerLat = (minLat + maxLat) / 2;
  const centerLng = (minLng + maxLng) / 2;

  return [centerLng, centerLat];
};
