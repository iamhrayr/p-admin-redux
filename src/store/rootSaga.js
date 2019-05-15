import { all } from 'redux-saga/effects';
import { workSagas } from './work';
import { categorySagas } from './category';
import { skillSagas } from './skill';

export default function* rootSaga() {
  yield all([workSagas(), categorySagas(), skillSagas()]);
}
