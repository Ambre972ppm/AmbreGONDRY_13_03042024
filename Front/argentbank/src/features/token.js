// token.js
// This file contains the Redux slice for managing the authentication token.

import { createSlice } from '@reduxjs/toolkit';

const localToken = localStorage.getItem('token') !== null ?
 localStorage.getItem('token') : (
  sessionStorage.getItem('token') !== null ? sessionStorage.getItem('token') :
  null
);

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: localToken, // Sets the initial token state based on local or session storage
  },
  reducers: {
    setUserToken: (state, action) => {
      state.token = action.payload; // Updates the authentication token
    }
  },
});

export const { setUserToken } = tokenSlice.actions;
export default tokenSlice.reducer;
