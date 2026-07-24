import api from './api';

/**
 * Auth Service
 * Calls /auth/* endpoints on the backend.
 */

const authService = {
  // TODO: implement when backend auth routes are ready
  register: (data) => api.post('/auth/register', data),
  login:    (data) => api.post('/auth/login', data),
  logout:   ()     => api.post('/auth/logout'),
};

export default authService;
