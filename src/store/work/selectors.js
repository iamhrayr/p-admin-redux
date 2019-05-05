import { createSelector } from 'reselect';

export const getWorksById = (state) => state.work.list.byId;
export const getWorksAllIds = (state) => state.work.list.allIds;

export const getWorkList = createSelector(
  getWorksById,
  getWorksAllIds,
  (byId, allIds) => {
    return allIds.map((id) => byId[id]);
  },
);

export const getSelectedWork = (state) => state.work.itemDetailsById[state.work.selectedWork];
export const getWorkDetailsById = (state) => state.work.itemDetailsById;
