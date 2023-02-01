import { createSlice } from '@reduxjs/toolkit';
import {
  getTrendingMovies,
  getQueryMoviesList,
  getQueryMoviesListRemove,
} from './transactionsOperations';

const initialState = { list: [], isLoading: false, error: null };

const moviesSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [getTrendingMovies.pending]: (state, action) => {},
    [getTrendingMovies.fulfilled]: (state, action) => {},
    [getTrendingMovies.rejected]: (state, action) => {},
    [getQueryMoviesList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getQueryMoviesList.fulfilled]: (state, action) => {
      state.list = action.payload.results;
      state.isLoading = false;
    },
    [getQueryMoviesList.rejected]: (state, action) => {
      state.list = [];
      state.isLoading = false;
    },
    [getQueryMoviesListRemove.pending]: state => {
      state.isLoading = true;
    },
    [getQueryMoviesListRemove.fulfilled]: (state, action) => {
      state.list = [];
      state.isLoading = false;
    },
    [getQueryMoviesListRemove.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default moviesSlice.reducer;
