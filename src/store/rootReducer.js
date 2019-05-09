import { combineReducers } from 'redux';
import createStatusReducer from 'redux-api-status';

import workReducer from './work';
import categoryReducer from './category';

export default combineReducers({
  work: workReducer,
  category: categoryReducer,
  status: createStatusReducer(),
});
