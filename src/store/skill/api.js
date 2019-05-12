import http from 'Utils/http';

export const fetchSkills = () => {
  return http.get('/skills');
};

export const editSkill = ({ id, input }) => {
  return http.patch(`/skills/${id}`, input);
};

export const publishSkill = ({ input }) => {
  return http.post(`/skills/`, input);
};
