// authSlice.js
// This file contains the Redux slice for authentication state management.

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Stores the user information
  token: null, // Stores the authentication token
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload; // Updates the user information
    },
    setToken(state, action) {
      state.token = action.payload; // Updates the authentication token
    },
    logout(state) {
      state.user = null; // Clears the user information
      state.token = null; // Clears the authentication token
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
