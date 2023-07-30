import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RequestStatusType, RouteType } from '../../../types/types';

export interface RoutesState {
  routes: RouteType[];
  isLoading: RequestStatusType;
  error: string;
}

const initialState: RoutesState = {
  routes: [],
  isLoading: 'idle',
  error: '',
};

export const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    fetchData: (state) => {
      state.isLoading = 'loading';
      state.error = '';
    },
    fetchDataSuccess: (state, action: PayloadAction<RouteType[]>) => {
      state.isLoading = 'succeeded';
      state.routes = action.payload;
    },
    fetchDataError: (state, action: PayloadAction<string>) => {
      state.isLoading = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchData, fetchDataSuccess, fetchDataError } = routesSlice.actions;

export default routesSlice.reducer;
