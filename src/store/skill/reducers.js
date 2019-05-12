import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { beginType, successType, failureType } from 'redux-api-status';
import produce from 'immer';

import * as types from './types';
import dataToIdMap from 'Utils/dataToIdMap';

const skillListReducer = handleActions(
  {
    [successType(types.FETCH_SKILLS)]: (state, action) => {
      const { byId, allIds } = dataToIdMap(action.payload.docs);
      const { docs, ...pagination } = action.payload;
      return {
        ...state,
        byId,
        allIds,
        pagination,
      };
    },
    [successType(types.EDIT_SKILL)]: produce((draft, action) => {
      draft.byId[action.payload._id] = action.payload;
    }),
  },
  {
    byId: {},
    allIds: [],
    pagination: {},
  },
);

export default combineReducers({
  list: skillListReducer,
});