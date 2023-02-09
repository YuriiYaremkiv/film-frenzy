import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'd08efe59ac708d7aace6afed9ba7eae9';

const mediaEndpoints = {
  listTrending: ({ mediaType, timeWindow, page }) =>
    `${BASE_URL}trending/${mediaType}/${timeWindow}?api_key=${KEY}&page=${page}`,
  listMovies: ({ movieType, page }) =>
    `${BASE_URL}movie/${movieType}?api_key=${KEY}&page=${page}`,
  trailer: ({ mediaId }) => `${BASE_URL}movie/${mediaId}/videos?api_key=${KEY}`,
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
  getTrailer: async ({ mediaId }) => {
    try {
      const response = await axios.get(mediaEndpoints.trailer({ mediaId }));
      return { response };
    } catch (err) {
      return { err };
    }
  },
};
export default mediaApi;
