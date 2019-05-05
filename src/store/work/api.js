import http from 'Utils/http';

export const fetchWorks = (params) => {
  return http.get('/works', { params });
};

export const fetchWork = (id) => {
  return http.get(`/works/${id}`);
};
