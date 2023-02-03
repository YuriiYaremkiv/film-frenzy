import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
});
