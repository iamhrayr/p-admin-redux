import { all } from 'redux-saga/effects';
import { workSagas } from './work';
import { categorySagas } from './category';

export default function* rootSaga() {
  yield all([...workSagas, ...categorySagas]);
}
