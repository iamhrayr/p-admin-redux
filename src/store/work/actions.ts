import { createAction } from 'redux-actions';

import * as types from './types';

export const fetchWorks = createAction(types.FETCH_WORKS);
export const fetchWork = createAction(types.FETCH_WORK);
export const addWork = createAction(types.ADD_WORK, null, (_, meta) => meta);
export const editWork = createAction(types.EDIT_WORK, null, (_, meta) => meta);
export const deleteWork = createAction(types.DELETE_WORK);
export const setSelectedWork = createAction(types.SET_SELECTED_WORK);
