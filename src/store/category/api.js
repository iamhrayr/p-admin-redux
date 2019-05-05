import http from 'Utils/http';

export const fetchCategories = (params) => {
  return http.get('/categories', { params });
};
