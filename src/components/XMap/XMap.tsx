import { FC } from 'react';

import { FeatureGroup, MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet';

import { findeCenter } from '../../helpers/findeCenter';
import { getCurrentRouteMarks } from '../../helpers/getCurrentRouteMarks';
import { reverseCoordinate } from '../../helpers/reverseCoordinate';
import { useAppSelector } from '../../redux/hooks';
import { currentRouteSelector, polylineSelector } from '../../redux/selectors';

import { CenterMapOnRoute } from './CenterMapOnRoute';
import styles from './XMap.module.scss';

export const XMap: FC = () => {
  const polylineCoordinates = useAppSelector(polylineSelector);
  const currentRoute = useAppSelector(currentRouteSelector);

  const center = findeCenter(polylineCoordinates);
  const position = polylineCoordinates ? reverseCoordinate(polylineCoordinates) : [];
  const currentRouteMarks = getCurrentRouteMarks(currentRoute);

  return (
    <MapContainer
      className={styles.mapContainer}
      center={center}
      scrollWheelZoom={false}
      zoom={13}
    >
      <FeatureGroup>
        {position.length > 0 && (
          <>
            {currentRouteMarks.map((mark) => (
              <Marker key={mark[0]} position={mark} />
            ))}
            <Polyline positions={position} />
          </>
        )}
        <CenterMapOnRoute coordinates={center} />
      </FeatureGroup>

      <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};
