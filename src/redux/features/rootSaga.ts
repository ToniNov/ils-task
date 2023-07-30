import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import currentRouteSaga from './currentRoute/currentRouteSaga';
import rootRoutesSaga from './routes/routesSaga';

export default function* rootSaga(): SagaIterator {
  yield all([fork(rootRoutesSaga), fork(currentRouteSaga)]);
}
