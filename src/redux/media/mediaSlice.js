import { createSlice } from '@reduxjs/toolkit';
import mediaApi from './mediaOperations';

const initialState = {
  popularMovies: { items: [], isLoading: false, error: '' },
};

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  extraReducers: {
    [mediaApi.getList.pending]: state => {},
    [mediaApi.getList.fulfilled]: (state, action) => {
      state.popularMovies.items = action.payload;
    },
    [mediaApi.getList.rejected]: (state, action) => {},
  },
});

export default mediaSlice.reducer;
