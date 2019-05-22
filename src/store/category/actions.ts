import { createAction, ActionFunctionAny } from 'redux-actions';

import * as types from './types';

export const fetchCategories = createAction(types.FETCH_CATEGORIES);
