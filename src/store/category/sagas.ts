import { call, put, takeLatest, select, throttle, fork } from 'redux-saga/effects';
import { begin, success, failure } from 'redux-api-status/actions';

import * as types from './types';
import * as api from './api';

// worker Sagas
function* fetchCategoriesHandler(action) {
  try {
    yield put(begin(types.FETCH_CATEGORIES));
    const categories = yield call(api.fetchCategories, action.payload);
    yield put(success(types.FETCH_CATEGORIES, categories.data));
  } catch (e) {
    yield put(failure(types.FETCH_CATEGORIES, e.response.data));
  }
}

// watchers
function* watcherSaga() {
  yield takeLatest(types.FETCH_CATEGORIES, fetchCategoriesHandler);
}

export default watcherSaga;
