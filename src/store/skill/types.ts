import { beginType, failureType, successType } from 'redux-api-status';
import { Pagination } from '../../app-types';

export default {
  FETCH_SKILLS: 'skill/FETCH_SKILLS',
  EDIT_SKILL: 'skill/EDIT_SKILL',
  DELETE_SKILL: 'skill/DELETE_SKILL',
  DELETE_UNSAVED_SKILL: 'skill/DELETE_UNSAVED_SKILL',
  ADD_EMPTY_SKILL: 'skill/ADD_EMPTY_SKILL',
  PUBLISH_SKILL: 'skill/PUBLISH_SKILL',
};

export type Skill = {
  _id: string;
  name: string;
  color: string;
  percent: number;
  localId?: string;
};

export type SkillListReducer = {
  byId: Record<string, Skill>;
  allIds: string[];
  pagination: Pagination;
};

export type SkillReducer = {
  list: SkillListReducer;
};
