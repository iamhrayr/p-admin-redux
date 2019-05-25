import reducer from './reducers';
import * as skillActions from './actions';
import * as skillSelectors from './selectors';
import skillTypes from './types';
import skillSagas from './sagas';

export { skillActions, skillSagas, skillTypes, skillSelectors };
export default reducer;
