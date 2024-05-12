import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './token'
import rememberReducer from './remember'

export default configureStore({
  reducer: {
    token : tokenReducer,
    remember: rememberReducer
  },
})