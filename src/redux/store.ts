import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import currentRouteReducer from './features/currentRoute/currentRouteSlice';
import rootSaga from './features/rootSaga';
import routesReducer from './features/routes/routesSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    routes: routesReducer,
    currentRoute: currentRouteReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
