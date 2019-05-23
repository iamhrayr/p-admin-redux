import http from 'Utils/http';

export const fetchCategories = (params: any) => {
  return http.get('/categories', { params });
};
