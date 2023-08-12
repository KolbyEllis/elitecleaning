// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/userSlice';
const store = configureStore({
  reducer: {
    user: userSlice,
    // Add other reducers as needed
  },
});

export default store;
