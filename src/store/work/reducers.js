import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { beginType, successType, failureType } from 'redux-api-status';
import produce from 'immer';

import * as types from './types';
import dataToIdMap from 'Utils/dataToIdMap';

const workListReducer = handleActions(
  {
    [successType(types.FETCH_WORKS)]: (state, action) => {
      const { byId, allIds } = dataToIdMap(action.payload.docs);
      const { docs, ...pagination } = action.payload;
      return {
        ...state,
        byId,
        allIds,
        pagination,
      };
    },
    [successType(types.EDIT_WORK)]: produce((draft, action) => {
      draft.byId[action.payload._id] = action.payload;
    }),
    [successType(types.DELETE_WORK)]: produce((draft, action) => {
      delete draft.byId[action.payload._id];
      draft.allIds = draft.allIds.filter(id => id !== action.payload._id);
      draft.pagination.total--;
    }),
  },
  {
    byId: {},
    allIds: [],
    pagination: {},
  },
);

const itemDetailsReducer = handleActions(
  {
    [successType(types.FETCH_WORK)]: produce((draft, action) => {
      draft[action.payload._id] = action.payload;
    }),
    [successType(types.EDIT_WORK)]: produce((draft, action) => {
      draft[action.payload._id] = action.payload;
    }),
    [successType(types.DELETE_WORK)]: produce((draft, action) => {
      delete draft[action.payload._id];
    }),
  },
  {},
);

const selectedWorkReducer = handleActions(
  {
    [types.SET_SELECTED_WORK]: (state, action) => action.payload.id,
  },
  null,
);

export default combineReducers({
  list: workListReducer,
  itemDetailsById: itemDetailsReducer,
  selectedWork: selectedWorkReducer,
});

// TODO: think about the shape of state
// const workStateShape = {
//   list: {
//     byId: {
//       1: {},
//       2: {},
//       3: {}
//     },
//     allIds: [1, 2],
//     pagination: {},
//     byPage: {
//       1: [1, 2],
//       2: [3, 4],
//     }
//   },
//   details: {
//     byId: {
//       1: {},
//       3: {}
//     }
//   },
//   selectedWork: 3
// };
