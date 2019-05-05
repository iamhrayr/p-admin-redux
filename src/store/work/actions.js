import { createAction } from 'redux-actions';

import * as types from './types';

export const fetchWorks = createAction(types.FETCH_WORKS);
export const fetchWorksSuccess = createAction(types.FETCH_WORKS_SUCCESS);
export const fetchWorksFailure = createAction(types.FETCH_WORKS_FAILURE);

export const fetchWork = createAction(types.FETCH_WORK);
export const fetchWorkSuccess = createAction(types.FETCH_WORK_SUCCESS);
export const fetchWorkFailure = createAction(types.FETCH_WORK_FAILURE);

export const addWork = createAction(types.ADD_WORK);
export const addWorkSuccess = createAction(types.ADD_WORK_SUCCESS);
export const addWorkFailure = createAction(types.ADD_WORK_FAILURE);

export const editWork = createAction(types.EDIT_WORK);
export const editWorkSuccess = createAction(types.EDIT_WORK_SUCCESS);
export const editWorkFailure = createAction(types.EDIT_WORK_FAILURE);

export const deleteWork = createAction(types.DELETE_WORK);
export const deleteWorkSuccess = createAction(types.DELETE_WORK_SUCCESS);
export const deleteWorkFailure = createAction(types.DELETE_WORK_FAILURE);

export const setWorkVisibility = createAction(types.SET_WORK_VISIBILITY);
export const setWorkVisibilitySuccess = createAction(types.SET_WORK_VISIBILITY_SUCCESS);
export const setWorkVisibilityFailure = createAction(types.SET_WORK_VISIBILITY_FAILURE);

export const setSelectedWork = createAction(types.SET_SELECTED_WORK);
