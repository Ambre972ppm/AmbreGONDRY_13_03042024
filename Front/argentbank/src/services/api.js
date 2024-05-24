// api.js
// This file contains functions for making API calls related to user authentication and profile.

import axios from 'axios';

// Create an axios instance with default configurations
const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api/v1', // Base URL for the API
  headers: {
    'Content-Type': 'application/json', // Default content type for the requests
  },
});

// Function to login a user
// Takes user credentials as input and returns the API response
export const loginUser = (credentials) => {
  return apiClient.post('/user/login', credentials);
};

// Function to get user profile
// Takes an authentication token as input and returns the API response
export const getProfile = (token) => {
  return apiClient.post('/user/profile', {}, {
    headers: {
      Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
    },
  });
};

// Function to update user profile
// Takes an authentication token and user data as input, and returns the API response
export const updateProfile = (token, data) => {
  return apiClient.put('/user/profile', data, {
    headers: {
      Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
    },
  });
};
