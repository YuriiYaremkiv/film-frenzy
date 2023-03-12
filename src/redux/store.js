import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { themeModeSlice } from './themeModeSlice';
import moviesSlice from './transactions/transactionsSlice';
import mediaSlice from './media/mediaSlice';
import searchSlice from './search/searchSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const themeModePersistConfig = {
  key: 'themeMode',
  storage,
};

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    media: mediaSlice,
    search: searchSlice,
    themeMode: persistReducer(themeModePersistConfig, themeModeSlice.reducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
