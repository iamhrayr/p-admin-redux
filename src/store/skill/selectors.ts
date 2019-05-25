import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';
import { Skill } from './types';

export const getSkillsById = (state: AppState) => state.skill.list.byId;
export const getSkillsAllIds = (state: AppState) => state.skill.list.allIds;

export const getSkillList = createSelector(
  getSkillsById,
  getSkillsAllIds,
  (byId: Record<string, Skill>, allIds: string[]) => {
    return allIds.map(id => byId[id]);
  },
);
