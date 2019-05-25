import { handleActions, Action, BaseAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { beginType, successType, failureType } from 'redux-api-status';
import produce from 'immer';

import dataToIdMap from 'Utils/dataToIdMap';
import types, { SkillListReducer, Skill } from './types';
// import { ApiListResponse } from '../../app-types';

const initialState: SkillListReducer = {
  byId: {},
  allIds: [],
  pagination: {},
};

const skillListReducer = handleActions(
  {
    [successType(types.FETCH_SKILLS)]: produce((draft: SkillListReducer, action: Action<any>) => {
      const { docs, ...pagination } = action.payload;
      const { byId, allIds } = dataToIdMap(docs);
      draft.byId = byId;
      draft.allIds = allIds;
      draft.pagination = pagination;
    }),

    [successType(types.EDIT_SKILL)]: produce((draft: SkillListReducer, action: Action<Skill>) => {
      draft.byId[action.payload._id] = action.payload;
    }),
    [types.ADD_EMPTY_SKILL]: produce((draft: SkillListReducer, action: Action<Skill>) => {
      draft.byId[action.payload.localId] = action.payload;
      draft.allIds.push(action.payload.localId);
    }),
    [successType(types.PUBLISH_SKILL)]: produce(
      (draft: SkillListReducer, action: Action<Skill>) => {
        delete draft.byId[action.payload.localId];
        draft.byId[action.payload._id] = action.payload;
        const i = draft.allIds.indexOf(action.payload.localId);
        draft.allIds[i] = action.payload._id;
      },
    ),
    [successType(types.DELETE_SKILL)]: produce((draft: SkillListReducer, action: Action<Skill>) => {
      delete draft.byId[action.payload._id];
      const i = draft.allIds.indexOf(action.payload._id);
      draft.allIds.splice(i, 1);
    }),
    [types.DELETE_UNSAVED_SKILL]: produce(
      (draft: SkillListReducer, action: Action<{ id: string }>) => {
        delete draft.byId[action.payload.id];
        const i = draft.allIds.indexOf(action.payload.id);
        draft.allIds.splice(i, 1);
      },
    ),
  },
  initialState,
);

export default combineReducers({
  list: skillListReducer,
});
