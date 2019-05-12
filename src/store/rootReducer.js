import { combineReducers } from 'redux';
import createStatusReducer from 'redux-api-status';

import workReducer from './work';
import categoryReducer from './category';
import skillReducer from './skill';

export default combineReducers({
  work: workReducer,
  category: categoryReducer,
  skill: skillReducer,
  requests: createStatusReducer(),
});
