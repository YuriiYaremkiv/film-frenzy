import { createSlice } from '@reduxjs/toolkit';
import {
  getTrendingAll,
  getQueryMoviesList,
  getQueryMoviesListRemove,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpComing,
  getTVToday,
  getTVOnTheAir,
  getTVPopular,
  getTVTopRated,
} from './transactionsOperations';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
  trendingAll: { items: [], isLoading: false, error: '' },
  popular: { items: [], isLoading: false, error: '' },
  tv: { items: [], isLoading: false, error: '' },
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: {
    [getTrendingAll.pending]: state => {
      state.trendingAll.isLoading = true;
    },
    [getTrendingAll.fulfilled]: (state, action) => {
      state.trendingAll.items = action.payload;
      state.trendingAll.isLoading = false;
    },
    [getTrendingAll.rejected]: (state, action) => {
      state.trendingAll.isLoading = false;
    },
    [getNowPlaying.pending]: state => {
      state.popular.isLoading = false;
    },
    [getNowPlaying.fulfilled]: (state, action) => {
      state.popular.items = action.payload;
      state.popular.isLoading = false;
    },
    [getNowPlaying.rejected]: state => {
      state.popular.isLoading = false;
    },
    [getPopular.pending]: state => {
      state.popular.isLoading = false;
    },
    [getPopular.fulfilled]: (state, action) => {
      state.popular.items = action.payload;
      state.popular.isLoading = false;
    },
    [getPopular.rejected]: state => {
      state.popular.isLoading = false;
    },
    [getTopRated.pending]: state => {
      state.popular.isLoading = false;
    },
    [getTopRated.fulfilled]: (state, action) => {
      state.popular.items = action.payload;
      state.popular.isLoading = false;
    },
    [getTopRated.rejected]: state => {
      state.popular.isLoading = false;
    },
    [getUpComing.pending]: state => {
      state.popular.isLoading = false;
    },
    [getUpComing.fulfilled]: (state, action) => {
      state.popular.items = action.payload;
      state.popular.isLoading = false;
    },
    [getUpComing.rejected]: state => {
      state.popular.isLoading = false;
    },
    [getTVToday.pending]: state => {
      state.tv.isLoading = false;
    },
    [getTVToday.fulfilled]: (state, action) => {
      state.tv.items = action.payload;
      state.tv.isLoading = false;
    },
    [getTVToday.rejected]: state => {
      state.tv.isLoading = false;
    },
    [getTVOnTheAir.pending]: state => {
      state.tv.isLoading = false;
    },
    [getTVOnTheAir.fulfilled]: (state, action) => {
      state.tv.items = action.payload;
      state.tv.isLoading = false;
    },
    [getTVOnTheAir.rejected]: state => {
      state.tv.isLoading = false;
    },
    [getTVPopular.pending]: state => {
      state.tv.isLoading = false;
    },
    [getTVPopular.fulfilled]: (state, action) => {
      state.tv.items = action.payload;
      state.tv.isLoading = false;
    },
    [getTVPopular.rejected]: state => {
      state.tv.isLoading = false;
    },
    [getTVTopRated.pending]: state => {
      state.tv.isLoading = false;
    },
    [getTVTopRated.fulfilled]: (state, action) => {
      state.tv.items = action.payload;
      state.tv.isLoading = false;
    },
    [getTVTopRated.rejected]: state => {
      state.tv.isLoading = false;
    },

    /********************************************************************************* */
    [getQueryMoviesList.pending]: state => {
      state.nowPlaying.isLoading = true;
    },
    [getQueryMoviesList.fulfilled]: (state, action) => {
      state.nowPlaying.isLoading = false;
    },
    [getQueryMoviesList.rejected]: state => {
      state.nowPlaying.isLoading = false;
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
