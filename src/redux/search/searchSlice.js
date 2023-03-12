import { createSlice } from '@reduxjs/toolkit';
import {
  getSearchMedia,
  getSearchPeople,
  getSearchMediaAdd,
  getSearchPeopleAdd,
} from './searchOperations';

const initialState = {
  media: [],
  people: [],
  query: '',
  page: 1,
  totalPages: 1,
  isLoading: false,
  error: '',
};

const searchSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getSearchMedia.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getSearchMedia.fulfilled, (state, action) => {
      state.media = action.payload.results;
      state.people = [];
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.isLoading = false;
    });
    builder.addCase(getSearchMedia.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getSearchPeople.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getSearchPeople.fulfilled, (state, action) => {
      state.people = action.payload.results;
      state.media = [];
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.isLoading = false;
    });
    builder.addCase(getSearchPeople.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getSearchMediaAdd.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getSearchMediaAdd.fulfilled, (state, action) => {
      state.media = [...state.media, ...action.payload.results];
      state.people = [];
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.isLoading = false;
    });
    builder.addCase(getSearchMediaAdd.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getSearchPeopleAdd.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getSearchPeopleAdd.fulfilled, (state, action) => {
      state.people = [...state.people, ...action.payload.results];
      state.media = [];
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.isLoading = false;
    });
    builder.addCase(getSearchPeopleAdd.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { setPage, setQuery } = searchSlice.actions;
export default searchSlice.reducer;
