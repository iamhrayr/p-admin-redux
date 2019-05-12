import http from 'Utils/http';

export const fetchSkills = () => {
  return http.get('/skills');
};
