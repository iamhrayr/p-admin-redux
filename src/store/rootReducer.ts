import { combineReducers } from 'redux';
import createStatusReducer from 'redux-api-status';

import workReducer from './work';
import categoryReducer from './category';
import skillReducer from './skill';

// import reducer types
import { CategoryReducer } from './category/types';

type AppState = {
  category: CategoryReducer;
};

export default combineReducers<AppState>({
  work: workReducer,
  category: categoryReducer,
  skill: skillReducer,
  requests: createStatusReducer(),
});
