import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './transactions/transactionsSlice';

import mediaSlice from './media/mediaSlice';
import searchSlice from './search/searchSlice';

import { themeModelSlice } from './themeModeSlice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    media: mediaSlice,
    search: searchSlice,
    themeMode: themeModelSlice.reducer,
  },
});
