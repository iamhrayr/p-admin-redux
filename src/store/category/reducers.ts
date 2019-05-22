import { handleActions, ReducerMap, Action } from 'redux-actions';
import { combineReducers } from 'redux';
import { beginType, successType, failureType } from 'redux-api-status';

import * as types from './types';
import { CategoryReducer, CategoryList } from './types';
import dataToIdMap from 'Utils/dataToIdMap';

const initialState: CategoryList = {
  byId: {},
  allIds: [],
  pagination: {},
};

const categoryListReducer = handleActions(
  {
    [successType(types.FETCH_CATEGORIES)]: (state, action: Action<any>) => {
      const { byId, allIds } = dataToIdMap(action.payload.docs);
      const { docs, ...pagination } = action.payload;
      return {
        ...state,
        byId,
        allIds,
        pagination,
      };
    },
  },
  initialState,
);

export default combineReducers<CategoryReducer>({
  list: categoryListReducer,
});
