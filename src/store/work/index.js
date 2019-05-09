import reducer from './reducers';
import * as workActions from './actions';
import * as workTypes from './types';
import * as workSelectors from './selectors';
import workSagas from './sagas';

export { workActions, workSagas, workTypes, workSelectors };
export default reducer;
