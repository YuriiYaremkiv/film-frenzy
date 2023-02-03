import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'd08efe59ac708d7aace6afed9ba7eae9';

// axios.defaults.baseURL = 'https://wallet.goit.ua/api';

// запит на всі транзакції для таблиці
export const getTrendingAll = createAsyncThunk(
  'movies/getTrendingAll',
  async (time, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}trending/all/${time}?api_key=${KEY}`
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getQueryMoviesList = createAsyncThunk(
  'movies/getQueryMoviesList',
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

export const getNowPlaying = createAsyncThunk(
  'movies/getNowPlaying',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}movie/now_playing?api_key=${KEY}&language=en-US&page=1`
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPopular = createAsyncThunk(
  'movies/getPopular',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}movie/popular?api_key=${KEY}&language=en-US&page=1`
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTopRated = createAsyncThunk(
  'movies/getTopRated',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}movie/top_rated?api_key=${KEY}&language=en-US&page=1`
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUpComing = createAsyncThunk(
  'movies/getUpComing',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}movie/upcoming?api_key=${KEY}&language=en-US&page=1`
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getQueryMoviesListRemove = createAsyncThunk(
  'movies/getQueryMoviesListRemove',
  async (_, { rejectWithValue }) => {
    return [];
  }
);
