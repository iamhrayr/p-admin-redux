import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { beginType, successType, failureType } from 'redux-api-status';

import * as types from './types';
import dataToIdMap from 'Utils/dataToIdMap';

const categoryListReducer = handleActions(
  {
    [successType(types.FETCH_CATEGORIES)]: (state, action) => {
      const { byId, allIds } = dataToIdMap(action.payload.docs);
      const { docs, ...pagination } = action.payload;
      return {
        ...state,
        byId,
        allIds,
        pagination,
        // data: docs,
        fetching: false,
        fetched: true,
      };
    },
  },
  {
    fetching: false,
    fetched: false,
    // data: [],
    byId: {},
    allIds: [],
    pagination: {},
  },
);

export default combineReducers({
  list: categoryListReducer,
});
