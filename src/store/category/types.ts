import { Pagination } from '../../app-types';

export type Category = {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CategoryReducer = {
  list: CategoryList;
};

export type CategoryList = {
  byId: Record<string, Category>;
  allIds: string[];
  pagination: Pagination;
};

export const FETCH_CATEGORIES = 'category/FETCH_CATEGORIES';

// export enum TYPES {
//   FETCH_CATEGORIES = 'category/FETCH_CATEGORIES',
// }
