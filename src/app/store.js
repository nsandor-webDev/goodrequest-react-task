import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../features/formSlice';

export const store = configureStore({
  reducer
});
