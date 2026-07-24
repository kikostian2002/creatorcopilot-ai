/**
 * api.js — Base HTTP client
 * Wraps fetch with base URL, default headers, and error normalisation.
 * Auth token is injected via the getToken callback (set at app init).
 */

const BASE_URL = import.meta.env.VITE_API_URL || '/api/v1';

let _getToken = () => null;

/** Call once in App.jsx after auth context is ready */
export function configureApi({ getToken }) {
  _getToken = getToken;
}

async function request(path, options = {}) {
  const token = _getToken();

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const error = new Error(errorBody.message || `HTTP ${response.status}`);
    error.status = response.status;
    error.data = errorBody;
    throw error;
  }

  // 204 No Content
  if (response.status === 204) return null;

  return response.json();
}

const api = {
  get:    (path, opts)   => request(path, { method: 'GET',    ...opts }),
  post:   (path, body)   => request(path, { method: 'POST',   body: JSON.stringify(body) }),
  patch:  (path, body)   => request(path, { method: 'PATCH',  body: JSON.stringify(body) }),
  delete: (path)         => request(path, { method: 'DELETE' }),
};

export default api;
