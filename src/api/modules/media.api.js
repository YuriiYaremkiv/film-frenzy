import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'd08efe59ac708d7aace6afed9ba7eae9';

const mediaEndpoints = {
  listTrending: ({ mediaType, timeWindow, page }) =>
    `${BASE_URL}trending/${mediaType}/${timeWindow}?api_key=${KEY}&page=${page}`,
  listMovies: ({ movieType, page }) =>
    `${BASE_URL}movie/${movieType}?api_key=${KEY}&page=${page}`,
  listRecommendationMovies: ({ movieId, page }) =>
    `${BASE_URL}movie/${movieId}/recommendations?api_key=${KEY}&page=${page}`,
  detailsMovie: ({ movieId }) => `${BASE_URL}movie/${movieId}?api_key=${KEY}`,
  trailer: ({ movieId }) => `${BASE_URL}movie/${movieId}/videos?api_key=${KEY}`,
  genres: () => `${BASE_URL}genre/movie/list?api_key=${KEY}`,
};

const mediaApi = {
  getList: async ({ mediaType, timeWindow, page = 1 }) => {
    try {
      const response = await axios.get(
        mediaEndpoints.listTrending({ mediaType, timeWindow, page })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getMovies: async ({ movieType, page = 1 }) => {
    try {
      const response = await axios.get(
        mediaEndpoints.listMovies({ movieType, page })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getRecommendationMovies: async ({ movieId, page = 1 }) => {
    try {
      const response = await axios.get(
        mediaEndpoints.listRecommendationMovies({ movieId, page })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getTrailer: async ({ movieId }) => {
    try {
      const response = await axios.get(mediaEndpoints.trailer({ movieId }));
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getDetailsForMovie: async ({ movieId }) => {
    try {
      const response = await axios.get(
        mediaEndpoints.detailsMovie({ movieId })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getGenres: async () => {
    try {
      const response = await axios.get(mediaEndpoints.genres());
      return { response };
    } catch (err) {
      return { err };
    }
  },
};
export default mediaApi;
