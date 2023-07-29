import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchDataFromApi } from '../../../HTTP-srvices/someApi';
import { RouteType } from '../../../types/types';

import { fetchData, fetchDataError, fetchDataSuccess } from './routesSlice';

export function* fetchDataSaga(): Generator<any, void, RouteType[]> {
  try {
    const response = yield call(fetchDataFromApi);

    yield put(fetchDataSuccess(response));
  } catch (error: any) {
    yield put(fetchDataError(error.message));
  }
}

export function* watchFetchData(): SagaIterator {
  yield takeLatest(fetchData.type, fetchDataSaga);
}

export default function* rootRoutesSaga(): Generator<SagaIterator, void> {
  yield watchFetchData();
}
