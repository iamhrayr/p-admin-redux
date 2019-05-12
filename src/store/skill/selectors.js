import { createSelector } from 'reselect';

export const getSkillsById = state => state.skill.list.byId;
export const getSkillsAllIds = state => state.skill.list.allIds;

export const getSkillList = createSelector(
  getSkillsById,
  getSkillsAllIds,
  (byId, allIds) => {
    return allIds.map(id => byId[id]);
  },
);
