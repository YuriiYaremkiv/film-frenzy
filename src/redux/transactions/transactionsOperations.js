import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'd08efe59ac708d7aace6afed9ba7eae9';

// axios.defaults.baseURL = 'https://wallet.goit.ua/api';

// запит на всі транзакції для таблиці
export const getTrendingMovies = createAsyncThunk(
  'transactions/getTrendingMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}trending/all/day?api_key=${KEY}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getQueryMoviesList = createAsyncThunk(
  'transactions/getQueryMoviesList',
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getQueryMoviesListRemove = createAsyncThunk(
  'transactions/getQueryMoviesListRemove',
  async (_, { rejectWithValue }) => {
    return [];
  }
);
