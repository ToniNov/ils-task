import { FC } from 'react';

import { LatLngTuple } from 'leaflet';
import { useMap } from 'react-leaflet';

type Props = {
  coordinates: LatLngTuple;
};

export const CenterMapOnRoute: FC<Props> = ({ coordinates }) => {
  const map = useMap();

  map.setView(coordinates, 12, { animate: true, noMoveStart: true });

  return null;
};
