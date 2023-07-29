import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import rootRoutesSaga from './routes/routesSaga';

export default function* rootSaga(): SagaIterator {
  yield all([fork(rootRoutesSaga)]);
}
