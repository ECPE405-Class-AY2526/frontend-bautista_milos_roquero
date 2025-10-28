import { API_ENDPOINTS } from './config';

// Helper to parse JSON responses
const parseJSON = async (res) => {
  const text = await res.text();
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    return { message: text };
  }
};

const handleResponse = async (res) => {
  const data = await parseJSON(res);
  if (!res.ok) {
    const err = new Error(data.message || 'Request failed');
    err.status = res.status;
    err.body = data;
    throw err;
  }
  return data;
};

const getToken = () => localStorage.getItem('token');
const getStoredUser = () => {
  const u = localStorage.getItem('user');
  return u ? JSON.parse(u) : null;
};
const setAuthData = (token, user) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
};
const clearAuthData = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const register = async (payload) => {
  const res = await fetch(API_ENDPOINTS.AUTH.REGISTER, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await handleResponse(res);
  // some servers return token + user, others return user with token field
  if (data.token) setAuthData(data.token, data);
  return data;
};

export const login = async (credentials) => {
  const res = await fetch(API_ENDPOINTS.AUTH.LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  const data = await handleResponse(res);
  if (data.token) setAuthData(data.token, data);
  return data;
};

export const logout = () => {
  clearAuthData();
};

export const getProfile = async () => {
  const token = getToken();
  if (!token) throw new Error('No token');
  const res = await fetch(API_ENDPOINTS.AUTH.PROFILE, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return handleResponse(res);
};

export const getDashboardData = async () => {
  const token = getToken();
  if (!token) throw new Error('No token');
  const user = getStoredUser();
  const endpoint = user?.role === 'Admin' ? API_ENDPOINTS.AUTH.ADMIN_DASHBOARD : API_ENDPOINTS.AUTH.USER_DASHBOARD;
  const res = await fetch(endpoint, { headers: { Authorization: `Bearer ${token}` } });
  return handleResponse(res);
};

export const getAdminDashboardData = async () => {
  const token = getToken();
  if (!token) throw new Error('No token');
  const res = await fetch(API_ENDPOINTS.AUTH.ADMIN_DASHBOARD, { headers: { Authorization: `Bearer ${token}` } });
  return handleResponse(res);
};

export const isAuthenticated = () => !!getToken() && !!getStoredUser();
export const getUserRole = () => getStoredUser()?.role || null;
export const isAdmin = () => getUserRole() === 'Admin';
