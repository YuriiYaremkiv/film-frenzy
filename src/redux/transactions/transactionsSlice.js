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
  extraReducers: builder => {
    builder.addCase(getTrendingAll.pending, state => {
      state.trendingAll.isLoading = true;
    });
    builder.addCase(getTrendingAll.fulfilled, (state, action) => {
      state.trendingAll.items = action.payload;
      state.trendingAll.isLoading = false;
    });
    builder.addCase(getTrendingAll.rejected, (state, action) => {
      state.trendingAll.isLoading = false;
    });
    builder.addCase(getNowPlaying.pending, state => {
      state.popular.isLoading = false;
    });
    builder.addCase(getNowPlaying.fulfilled, (state, action) => {
      state.popular.items = action.payload;
      state.popular.isLoading = false;
    });
    builder.addCase(getNowPlaying.rejected, state => {
      state.popular.isLoading = false;
    });
    builder.addCase(getPopular.pending, state => {
      state.popular.isLoading = false;
    });
    builder.addCase(getPopular.fulfilled, (state, action) => {
      state.popular.items = action.payload;
      state.popular.isLoading = false;
    });
    builder.addCase(getPopular.rejected, state => {
      state.popular.isLoading = false;
    });
    builder.addCase(getTopRated.pending, state => {
      state.popular.isLoading = false;
    });
    builder.addCase(getTopRated.fulfilled, (state, action) => {
      state.popular.items = action.payload;
      state.popular.isLoading = false;
    });
    builder.addCase(getTopRated.rejected, state => {
      state.popular.isLoading = false;
    });
    builder.addCase(getUpComing.pending, state => {
      state.popular.isLoading = false;
    });
    builder.addCase(getUpComing.fulfilled, (state, action) => {
      state.popular.items = action.payload;
      state.popular.isLoading = false;
    });
    builder.addCase(getUpComing.rejected, state => {
      state.popular.isLoading = false;
    });
    builder.addCase(getTVToday.pending, state => {
      state.tv.isLoading = false;
    });
    builder.addCase(getTVToday.fulfilled, (state, action) => {
      state.tv.items = action.payload;
      state.tv.isLoading = false;
    });
    builder.addCase(getTVToday.rejected, state => {
      state.tv.isLoading = false;
    });
    builder.addCase(getTVOnTheAir.pending, state => {
      state.tv.isLoading = false;
    });
    builder.addCase(getTVOnTheAir.fulfilled, (state, action) => {
      state.tv.items = action.payload;
      state.tv.isLoading = false;
    });
    builder.addCase(getTVOnTheAir.rejected, state => {
      state.tv.isLoading = false;
    });
    builder.addCase(getTVPopular.pending, state => {
      state.tv.isLoading = false;
    });
    builder.addCase(getTVPopular.fulfilled, (state, action) => {
      state.tv.items = action.payload;
      state.tv.isLoading = false;
    });
    builder.addCase(getTVPopular.rejected, state => {
      state.tv.isLoading = false;
    });
    builder.addCase(getTVTopRated.pending, state => {
      state.tv.isLoading = false;
    });
    builder.addCase(getTVTopRated.fulfilled, (state, action) => {
      state.tv.items = action.payload;
      state.tv.isLoading = false;
    });
    builder.addCase(getTVTopRated.rejected, state => {
      state.tv.isLoading = false;
    });
    builder.addCase(getQueryMoviesList.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getQueryMoviesList.fulfilled, (state, action) => {
      state.list = action.payload.results;
      state.isLoading = false;
    });
    builder.addCase(getQueryMoviesList.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getQueryMoviesListRemove.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getQueryMoviesListRemove.fulfilled, (state, action) => {
      state.list = [];
      state.isLoading = false;
    });
    builder.addCase(getQueryMoviesListRemove.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default moviesSlice.reducer;
