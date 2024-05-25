// store.js
// This file sets up the Redux store with the necessary slices.

import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../features/token';
import rememberReducer from '../features/remember';

export default configureStore({
  reducer: {
    token: tokenReducer, // Handles token state
    remember: rememberReducer // Handles remember state
  },
});
