import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './transactions/transactionsSlice';

import mediaSlice from './media/mediaSlice';

import { themeModelSlice } from './themeModeSlice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    media: mediaSlice,
    themeMode: themeModelSlice.reducer,
  },
});
