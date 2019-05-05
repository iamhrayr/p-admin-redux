import { call, put, takeLatest, select, throttle, fork } from 'redux-saga/effects';
import {
  fetchWorksSuccess,
  fetchWorksFailure,
  fetchWorkSuccess,
  fetchWorkFailure,
  fetchWork,
} from './actions';
import { getWorkDetailsById } from './selectors';
import * as types from './types';
import * as api from './api';

// worker Sagas
function* fetchWorksAsync(action) {
  try {
    const works = yield call(api.fetchWorks, action.payload);
    yield put(fetchWorksSuccess(works.data));
  } catch (e) {
    yield put(fetchWorksFailure(e.response.data));
  }
}

function* fetchWorkAsync(action) {
  try {
    const work = yield call(api.fetchWork, action.payload.id);
    yield put(fetchWorkSuccess(work.data));
  } catch (e) {
    yield put(fetchWorkFailure(e.response.data));
  }
}

function* setSelectedWorkSaga(action) {
  const workDetailsById = yield select(getWorkDetailsById);
  if (!workDetailsById[action.payload.id]) {
    yield put(fetchWork({ id: action.payload.id }));
  }
}

// watchers
function* watcherSaga() {
  yield takeLatest(types.FETCH_WORKS, fetchWorksAsync);
  yield takeLatest(types.FETCH_WORK, fetchWorkAsync);
  yield takeLatest(types.SET_SELECTED_WORK, setSelectedWorkSaga);
}

export default [fork(watcherSaga)];
