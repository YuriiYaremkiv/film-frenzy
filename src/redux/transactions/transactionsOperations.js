import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'd08efe59ac708d7aace6afed9ba7eae9';

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
      console.log('query start');
      const response = await axios.get(
        `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      return response.data;
    } catch (error) {
      console.log('query start');
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

export const getTVToday = createAsyncThunk(
  'movies/getTVToday',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/airing_today?api_key=${KEY}&language=en-US&page=1`
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTVOnTheAir = createAsyncThunk(
  'movies/getTVOnTheAir',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/on_the_air?api_key=${KEY}&language=en-US&page=1`
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTVPopular = createAsyncThunk(
  'movies/getTVPopular',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/popular?api_key=${KEY}&language=en-US&page=1`
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTVTopRated = createAsyncThunk(
  'movies/getTVTopRated',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/top_rated?api_key=${KEY}&language=en-US&page=1`
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
