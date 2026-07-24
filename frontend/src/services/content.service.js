import api from './api';

/**
 * Content Service
 * Calls /content/* endpoints on the backend.
 */

const contentService = {
  // TODO: implement when backend content routes are ready
  getAll:  ()           => api.get('/content'),
  getOne:  (id)         => api.get(`/content/${id}`),
  create:  (data)       => api.post('/content', data),
  update:  (id, data)   => api.patch(`/content/${id}`, data),
  remove:  (id)         => api.delete(`/content/${id}`),
};

export default contentService;
