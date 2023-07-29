import { RouteType } from '../types/types';

import { data } from './server-data';

export const fetchDataFromApi = (): Promise<RouteType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
};
