// remember.js
// This file contains the Redux slice for managing the "remember me" functionality.

import { createSlice } from '@reduxjs/toolkit';

const localRemember = localStorage.getItem('remember');

export const rememberSlice = createSlice({
  name: 'user',
  initialState: {
    remember: localRemember === "true" ? true : false, // Sets the initial state based on local storage
  },
  reducers: {
    setRemember: (state, action) => {
      state.remember = action.payload; // Updates the remember state
    }
  },
});

export const { setRemember } = rememberSlice.actions;
export default rememberSlice.reducer;
