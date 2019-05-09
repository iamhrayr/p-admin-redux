import { createStatusSelectors } from 'redux-api-status';

const statusSelectors = createStatusSelectors(state => state.status);

export default (state, scope) => {
  return {
    loading: statusSelectors.getIsPending(state, scope),
    done: statusSelectors.getHasLoaded(state, scope),
    error: statusSelectors.getErrorMessage(state, scope),
    timestamp: statusSelectors.getTimestamp(state, scope),
  };
};
