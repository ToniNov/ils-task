import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LatLngTuple } from 'leaflet';

import { DataTableType } from '../../../components/XTable/XTable';
import { RequestStatusType } from '../../../types/types';

export interface CurrentRouteState {
  currentRoute: DataTableType;
  polyline: LatLngTuple[];
  isLoading: RequestStatusType;
  error: string;
}

const initialState: CurrentRouteState = {
  currentRoute: {} as DataTableType,
  polyline: [],
  isLoading: 'idle',
  error: '',
};

const currentRouteSlice = createSlice({
  name: 'currentRoute',
  initialState,
  reducers: {
    selectRoute(state, action: PayloadAction<DataTableType>) {
      state.isLoading = 'loading';
      state.currentRoute = action.payload;
    },
    setRoute(state, action: PayloadAction<DataTableType>) {
      state.isLoading = 'succeeded';
      state.error = '';
      state.currentRoute = action.payload;
    },
    setPolyline(state, action: PayloadAction<LatLngTuple[]>) {
      state.isLoading = 'succeeded';
      state.error = '';
      state.polyline = action.payload;
    },
    routeError(state, action: PayloadAction<string>) {
      state.isLoading = 'succeeded';
      state.error = action.payload;
    },
  },
});

export default currentRouteSlice.reducer;
export const { selectRoute, setRoute, setPolyline, routeError } =
  currentRouteSlice.actions;
