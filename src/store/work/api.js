import http from 'Utils/http';

export const fetchWorks = params => {
  return http.get('/works', { params });
};

export const fetchWork = id => {
  return http.get(`/works/${id}`);
};

export const addWork = input => {
  return http.post(`/works/`, input, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  });
};

export const editWork = ({ id, input }) => {
  return http.patch(`/works/${id}`, input, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteWork = id => {
  return http.delete(`/works/${id}`);
};
