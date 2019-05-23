import { beginType, successType, failureType } from 'redux-api-status';

import { Pagination, ApiListResponse } from '../../app-types';

export const FETCH_CATEGORIES = 'category/FETCH_CATEGORIES';
export const FETCH_CATEGORIES_REQUEST = beginType(FETCH_CATEGORIES);
export const FETCH_CATEGORIES_SUCCESS = successType(FETCH_CATEGORIES);
export const FETCH_CATEGORIES_FAILURE = failureType(FETCH_CATEGORIES);

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

type FetchCategoriesAction = {
  type: typeof FETCH_CATEGORIES;
};

type FetchCategoriesSuccessAction = {
  type: typeof FETCH_CATEGORIES_SUCCESS;
  payload: ApiListResponse;
};

// type FetchCategoriesFailureAction = {
//   type: typeof FETCH_CATEGORIES_FAILURE;
//   payload: ApiListResponse;
// };

// export type CategoryAction = any; //TODO: change to correct type
export type CategoryAction = FetchCategoriesAction | FetchCategoriesSuccessAction;

// export enum TYPES {
//   FETCH_CATEGORIES = 'category/FETCH_CATEGORIES',
// }
