import { call, put, takeLatest, select, throttle, fork } from 'redux-saga/effects';
import { begin, success, failure } from 'redux-api-status/actions';

import * as types from './types';
import * as api from './api';

// worker Sagas
function* fetchSkillsHandler(action) {
  try {
    yield put(begin(types.FETCH_SKILLS));
    const skills = yield call(api.fetchSkills, action.payload);
    yield put(success(types.FETCH_SKILLS, skills.data));
  } catch (e) {
    yield put(failure(types.FETCH_SKILLS, e.response.data));
  }
}

function* editSkillHandler({ payload, meta = {} }) {
  try {
    yield put(begin(types.EDIT_SKILL));
    const skill = yield call(api.editSkill, payload);
    yield put(success(types.EDIT_SKILL, skill.data));
    if (meta.resolve) {
      meta.resolve(skill.data);
    }
  } catch (e) {
    yield put(failure(types.EDIT_SKILL, e.response.data));
    if (meta.reject) {
      meta.reject(e.response.data);
    }
  }
}

// watchers
function* watcherSaga() {
  yield takeLatest(types.FETCH_SKILLS, fetchSkillsHandler);
  yield takeLatest(types.EDIT_SKILL, editSkillHandler);
}

export default [fork(watcherSaga)];
