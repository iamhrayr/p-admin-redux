import { createAction } from 'redux-actions';

import * as types from './types';

export const fetchWorks = createAction(types.FETCH_WORKS);
export const fetchWork = createAction(types.FETCH_WORK);
export const addWork = createAction(types.ADD_WORK);
export const editWork = createAction(types.EDIT_WORK, null, (payload, meta) => meta);
export const deleteWork = createAction(types.DELETE_WORK);
export const setWorkVisibility = createAction(types.SET_WORK_VISIBILITY);
export const setSelectedWork = createAction(types.SET_SELECTED_WORK);
