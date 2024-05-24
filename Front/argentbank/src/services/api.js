import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = (credentials) => {
  return apiClient.post('/user/login', credentials);
};

export const getProfile = (token) => {
  return apiClient.post('/user/profile', {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = (token, data) => {
  return apiClient.put('/user/profile', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
