import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { beginType, successType, failureType } from 'redux-api-status';

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
        fetching: false,
        fetched: true,
      };
    },
    // [successType(types.EDIT_WORK)]: (state, action) => ({
    //   ...state,
    //   byId: {
    //     ...state.byId,
    //     [action.payloadf._id]: action.payload,
    //   },
    // }),
  },
  {
    fetching: false,
    fetched: false,
    byId: {},
    allIds: [],
    pagination: {},
  },
);

const itemDetailsReducer = handleActions(
  {
    [successType(types.FETCH_WORK)]: (state, action) => ({
      ...state,
      [action.payload._id]: action.payload,
    }),
    [successType(types.EDIT_WORK)]: (state, action) => ({
      ...state,
      [action.payload._id]: action.payload,
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
