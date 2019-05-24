import { handleActions, Action, BaseAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { beginType, successType, failureType } from 'redux-api-status';
import produce from 'immer';

import dataToIdMap from 'Utils/dataToIdMap';
import { actionTypes, ISkillList, ISkill } from './types';
// import { ApiListResponse } from '../../app-types';

const initialState: ISkillList = {
  byId: {},
  allIds: [],
  pagination: {},
};

const skillListReducer = handleActions(
  {
    [successType(actionTypes.FETCH_SKILLS)]: produce((draft: ISkillList, action: Action<any>) => {
      const { docs, ...pagination } = action.payload;
      const { byId, allIds } = dataToIdMap(docs);
      draft.byId = byId;
      draft.allIds = allIds;
      draft.pagination = pagination;
    }),

    [successType(actionTypes.EDIT_SKILL)]: produce((draft: ISkillList, action: Action<ISkill>) => {
      draft.byId[action.payload._id] = action.payload;
    }),
    [actionTypes.ADD_EMPTY_SKILL]: produce((draft: ISkillList, action: Action<ISkill>) => {
      draft.byId[action.payload.localId] = action.payload;
      draft.allIds.push(action.payload.localId);
    }),
    [successType(actionTypes.PUBLISH_SKILL)]: produce(
      (draft: ISkillList, action: Action<ISkill>) => {
        delete draft.byId[action.payload.localId];
        draft.byId[action.payload._id] = action.payload;
        const i = draft.allIds.indexOf(action.payload.localId);
        draft.allIds[i] = action.payload._id;
      },
    ),
    [successType(actionTypes.DELETE_SKILL)]: produce(
      (draft: ISkillList, action: Action<ISkill>) => {
        delete draft.byId[action.payload._id];
        const i = draft.allIds.indexOf(action.payload._id);
        draft.allIds.splice(i, 1);
      },
    ),
    [actionTypes.DELETE_UNSAVED_SKILL]: produce(
      (draft: ISkillList, action: Action<{ id: string }>) => {
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
