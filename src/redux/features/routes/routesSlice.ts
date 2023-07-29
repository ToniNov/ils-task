import { createSlice } from '@reduxjs/toolkit';

import { RequestStatusType, RouteType } from '../../../types/types';

export interface RoutesState {
  routes: RouteType[];
  isLoading: RequestStatusType;
  error: null;
}

const initialState: RoutesState = {
  routes: [],
  isLoading: 'idle',
  error: null,
};

export const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    fetchData: (state) => {
      state.isLoading = 'loading';
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.isLoading = 'succeeded';
      state.routes = action.payload;
    },
    fetchDataError: (state, action) => {
      state.isLoading = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchData, fetchDataSuccess, fetchDataError } = routesSlice.actions;

export default routesSlice.reducer;
