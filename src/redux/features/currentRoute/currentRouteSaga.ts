import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { DataTableType } from '../../../components/XTable/XTable';
import { formatCoordinates } from '../../../helpers/formatCoordinates';
import { osrmApi } from '../../../HTTP-srvices/osrmApi';

import { setPolyline, setRoute, routeError, selectRoute } from './currentRouteSlice';

type action = {
  type: string;
  payload: DataTableType;
};

function* fetchRouteData(args: action): Generator<any, void, any> {
  const coordinates = formatCoordinates(args.payload);

  try {
    const response = yield call(osrmApi, coordinates);

    const routeCoordinates = response.routes[0].geometry.coordinates.map(
      (el: number[]) => el,
    );

    yield put(setRoute(args.payload));
    yield put(setPolyline(routeCoordinates));
  } catch (error: any) {
    yield put(routeError(error.message));
  }
}

function* watchSelectRoute(): SagaIterator {
  yield takeLatest(selectRoute.type, fetchRouteData);
}

export default function* currentRouteSaga(): Generator<SagaIterator, void> {
  yield watchSelectRoute();
}
