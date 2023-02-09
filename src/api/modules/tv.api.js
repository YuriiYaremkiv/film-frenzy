import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'd08efe59ac708d7aace6afed9ba7eae9';

const mediaEndpoints = {
  listTV: ({ mediaType, tvType, page }) =>
    `${BASE_URL}${mediaType}/${tvType}?api_key=${KEY}&page=${page}`,
};

const tvApi = {
  getList: async ({ mediaType, tvType, page = 1 }) => {
    try {
      const response = await axios.get(
        mediaEndpoints.listTV({ mediaType, tvType, page })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};
export default tvApi;

// https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
