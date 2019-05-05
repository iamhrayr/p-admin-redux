import { combineReducers } from 'redux';
import workReducer from './work';
import categoryReducer from './category';

export default combineReducers({
  work: workReducer,
  category: categoryReducer
});
