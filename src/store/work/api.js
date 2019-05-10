import http from 'Utils/http';

export const fetchWorks = params => {
  return http.get('/works', { params });
};

export const fetchWork = id => {
  return http.get(`/works/${id}`);
};

export const addWork = input => {
  return http.post(`/works/`, input);
};

export const editWork = ({ id, input }) => {
  return http.patch(`/works/${id}`, input);
};

export const deleteWork = id => {
  return http.delete(`/works/${id}`);
};
