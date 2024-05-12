import { createSlice } from '@reduxjs/toolkit'

const localToken = localStorage.getItem('token') !== null ?
 localStorage.getItem('token') : (
  sessionStorage.getItem('token') !== null ? sessionStorage.getItem('token') :
  null
 )

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: localToken,
  },
  reducers: {
    setUserToken: (state, action) => {
      state.token = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserToken } = tokenSlice.actions

export default tokenSlice.reducer