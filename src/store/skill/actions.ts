import { createAction } from 'redux-actions';

import * as types from './types';

export const fetchSkills = createAction(types.FETCH_SKILLS);
export const editSkill = createAction(types.EDIT_SKILL, null, (_, meta) => meta);
export const deleteSkill = createAction(types.DELETE_SKILL, null, (_, meta) => meta);
export const deleteUnsavedSkill = createAction(types.DELETE_UNSAVED_SKILL);
export const addEmptySkill = createAction(types.ADD_EMPTY_SKILL);
export const publishSkill = createAction(types.PUBLISH_SKILL, null, (_, meta) => meta);
