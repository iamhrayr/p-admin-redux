import { call, put, takeLatest, select, fork } from 'redux-saga/effects';
import { begin, success, failure } from 'redux-api-status/actions';

import { fetchWork } from './actions';
import { getWorkDetailsById } from './selectors';
import * as types from './types';
import * as api from './api';

// worker Sagas
function* fetchWorksHandler(action) {
  try {
    yield put(begin(types.FETCH_WORKS));
    const works = yield call(api.fetchWorks, action.payload);
    yield put(success(types.FETCH_WORKS, works.data));
  } catch (e) {
    yield put(failure(types.FETCH_WORKS, { error: e.response.data }));
  }
}

function* fetchWorkHandler(action) {
  try {
    yield put(begin(types.FETCH_WORK));
    const work = yield call(api.fetchWork, action.payload.id);
    yield put(success(types.FETCH_WORK, work.data));
  } catch (e) {
    yield put(failure(types.FETCH_WORK, e.response.data));
  }
}

function* editWorkHandler({ payload, meta = {} }) {
  try {
    yield put(begin(types.EDIT_WORK));
    const work = yield call(api.editWork, payload);
    yield put(success(types.EDIT_WORK, work.data));
    if (meta.resolve) {
      yield fork(meta.resolve, work.data);
    }
  } catch (e) {
    yield put(failure(types.EDIT_WORK, e.response.data));
    if (meta.reject) {
      yield fork(meta.reject, e.response.data);
    }
  }
}

function* addWorkHandler({ payload, meta = {} }) {
  try {
    yield put(begin(types.ADD_WORK));
    const work = yield call(api.addWork, payload.input);
    yield put(success(types.ADD_WORK, work.data));
    if (meta.resolve) {
      yield fork(meta.resolve, work.data);
    }
  } catch (e) {
    yield put(failure(types.ADD_WORK, e.response.data));
    if (meta.reject) {
      yield fork(meta.reject, e.response.data);
    }
  }
}

function* deleteWorkHandler({ payload, meta = {} }) {
  try {
    yield put(begin(types.DELETE_WORK));
    const work = yield call(api.deleteWork, payload.id);
    yield put(success(types.DELETE_WORK, work.data));
    if (meta.resolve) {
      yield fork(meta.resolve, work.data);
    }
  } catch (e) {
    yield put(failure(types.DELETE_WORK, e.response.data));
    if (meta.reject) {
      yield fork(meta.reject, e.response.data);
    }
  }
}

function* setSelectedWorkHandler(action) {
  const workDetailsById = yield select(getWorkDetailsById);
  if (!workDetailsById[action.payload.id]) {
    yield put(fetchWork({ id: action.payload.id }));
  }
}

// watchers
function* watcherSaga() {
  yield takeLatest(types.FETCH_WORKS, fetchWorksHandler);
  yield takeLatest(types.FETCH_WORK, fetchWorkHandler);
  yield takeLatest(types.EDIT_WORK, editWorkHandler);
  yield takeLatest(types.ADD_WORK, addWorkHandler);
  yield takeLatest(types.SET_SELECTED_WORK, setSelectedWorkHandler);
  yield takeLatest(types.DELETE_WORK, deleteWorkHandler);
}

export default watcherSaga;
