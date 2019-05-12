import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { beginType, successType, failureType } from 'redux-api-status';
import produce from 'immer';

import * as types from './types';
import dataToIdMap from 'Utils/dataToIdMap';

const skillListReducer = handleActions(
  {
    [successType(types.FETCH_SKILLS)]: produce((draft, action) => {
      const { docs, ...pagination } = action.payload;
      const { byId, allIds } = dataToIdMap(docs);
      draft.byId = byId;
      draft.allIds = allIds;
      draft.pagination = pagination;
    }),
    [successType(types.EDIT_SKILL)]: produce((draft, action) => {
      draft.byId[action.payload._id] = action.payload;
    }),
    [types.ADD_EMPTY_SKILL]: produce((draft, action) => {
      draft.byId[action.payload.localId] = action.payload;
      draft.allIds.push(action.payload.localId);
    }),
    [successType(types.PUBLISH_SKILL)]: produce((draft, action) => {
      delete draft.byId[action.payload.localId];
      draft.byId[action.payload._id] = action.payload;
      const i = draft.allIds.indexOf(action.payload.localId);
      draft.allIds[i] = action.payload._id;
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
