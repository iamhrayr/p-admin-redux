import { combineReducers } from 'redux';
import createStatusReducer from 'redux-api-status';

import workReducer from './work';
import categoryReducer from './category';
import skillReducer from './skill';

// import reducer types
// import { CategoryReducer } from './category/types';
// import { CategoryReducer } from './category/types';

const rootReducer = combineReducers({
  work: workReducer,
  category: categoryReducer,
  skill: skillReducer,
  requests: createStatusReducer(),
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
