import { createSlice } from '@reduxjs/toolkit'

const localRemember = localStorage.getItem('remember')

export const rememberSlice = createSlice({
  name: 'user',
  initialState: {
    remember: localRemember === "true" ? true : false,
  },
  reducers: {
    setRemember: (state, action) => {
      state.remember = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRemember } = rememberSlice.actions

export default rememberSlice.reducer