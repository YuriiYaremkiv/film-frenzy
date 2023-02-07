import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'd08efe59ac708d7aace6afed9ba7eae9';

const mediaEndpoints = {
  listTrending: ({ mediaType, timeWindow }) =>
    `${BASE_URL}trending/${mediaType}/${timeWindow}?api_key=${KEY}`,
};

const mediaApi = {
  getList: createAsyncThunk(
    'media/getList',
    async ({ mediaType, timeWindow }, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          mediaEndpoints.listTrending({ mediaType, timeWindow })
        );
        return response.data.results;
      } catch (err) {
        return rejectWithValue(err);
      }
    }
  ),
};

export default mediaApi;
