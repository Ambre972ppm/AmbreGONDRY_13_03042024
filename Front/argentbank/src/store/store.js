import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from '../redux/token'
import rememberReducer from '../features/remember'

export default configureStore({
  reducer: {
    token : tokenReducer,
    remember: rememberReducer
  },
})