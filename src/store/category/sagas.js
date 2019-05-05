import { call, put, takeLatest, select, throttle, fork } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import * as api from './api';

// worker Sagas
function* fetchCategoriesAsync(action) {
  try {
    const categories = yield call(api.fetchCategories, action.payload);
    yield put(actions.fetchCategoriesSuccess(categories.data));
  } catch (e) {
    yield put(actions.fetchCategoriesFailure(e.response.data));
  }
}

// watchers
function* watcherSaga() {
  yield takeLatest(types.FETCH_CATEGORIES, fetchCategoriesAsync);
}

export default [fork(watcherSaga)];
