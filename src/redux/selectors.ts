import { RoutesState } from './features/routes/routesSlice';
import { RootState } from './store';

export const routesSelector = (state: RootState): RoutesState => state.routes;
