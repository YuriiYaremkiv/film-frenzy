import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './transactions/transactionsSlice';

import mediaSlice from './media/mediaSlice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    media: mediaSlice,
  },
});
