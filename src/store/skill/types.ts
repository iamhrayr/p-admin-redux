import { beginType, failureType, successType } from 'redux-api-status';
import { Pagination } from '../../app-types';

export const FETCH_SKILLS = 'skill/FETCH_SKILLS';
// export const FETCH_SKILLS_REQUEST = beginType(FETCH_SKILLS);
// export const FETCH_SKILLS_FAILURE = failureType(FETCH_SKILLS);
// export const FETCH_SKILLS_SUCCESS = successType(FETCH_SKILLS);

export const EDIT_SKILL = 'skill/EDIT_SKILL';
export const DELETE_SKILL = 'skill/DELETE_SKILL';
export const DELETE_UNSAVED_SKILL = 'skill/DELETE_UNSAVED_SKILL';
export const ADD_EMPTY_SKILL = 'skill/ADD_EMPTY_SKILL';
export const PUBLISH_SKILL = 'skill/PUBLISH_SKILL';

export const actionTypes = {
  FETCH_SKILLS: 'skill/FETCH_SKILLS',
  EDIT_SKILL: 'skill/EDIT_SKILL',
  DELETE_SKILL: 'skill/DELETE_SKILL',
  DELETE_UNSAVED_SKILL: 'skill/DELETE_UNSAVED_SKILL',
  ADD_EMPTY_SKILL: 'skill/ADD_EMPTY_SKILL',
  PUBLISH_SKILL: 'skill/PUBLISH_SKILL',
};

export interface ISkill {
  _id: string;
  name: string;
  color: string;
  percent: number;
  localId?: string;
}

export interface ISkillList {
  byId: Record<string, ISkill>;
  allIds: string[];
  pagination: Pagination;
}

export interface ISkillReducer {
  list: ISkillList;
}
