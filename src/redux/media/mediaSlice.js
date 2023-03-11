import { createSlice } from '@reduxjs/toolkit';
import mediaApi from './mediaOperations';

const initialState = {
  popularMovies: { items: [], isLoading: false, error: '' },
};

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(mediaApi.getList.pending, state => {})
      .addCase(mediaApi.getList.fulfilled, (state, action) => {
        state.popularMovies.items = action.payload;
      })
      .addCase(mediaApi.getList.rejected, (state, action) => {});
  },
});

export default mediaSlice.reducer;
