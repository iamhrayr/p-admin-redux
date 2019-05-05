import { createAction } from 'redux-actions';

import * as types from './types';

export const fetchCategories = createAction(types.FETCH_CATEGORIES);
export const fetchCategoriesSuccess = createAction(types.FETCH_CATEGORIES_SUCCESS);
export const fetchCategoriesFailure = createAction(types.FETCH_CATEGORIES_FAILURE);
