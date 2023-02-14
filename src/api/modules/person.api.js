import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'd08efe59ac708d7aace6afed9ba7eae9';

const mediaEndpoints = {
  getDetails: ({ personId }) => `${BASE_URL}person/${personId}?api_key=${KEY}`,
  getMovieCredits: ({ personId }) =>
    `${BASE_URL}person/${personId}/movie_credits?api_key=${KEY}`,
};

const personApi = {
  getDetails: async ({ personId }) => {
    try {
      const response = await axios.get(mediaEndpoints.getDetails({ personId }));
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getMovieCredits: async ({ personId }) => {
    try {
      const response = await axios.get(
        mediaEndpoints.getMovieCredits({ personId })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default personApi;
