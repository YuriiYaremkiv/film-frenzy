import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'd08efe59ac708d7aace6afed9ba7eae9';

const mediaEndpoints = {
  list: ({ searchType, query, page }) =>
    `${BASE_URL}search/${searchType}?api_key=${KEY}&query=${query}&page=${page}`,
};

const searchAPI = {
  getSearch: async ({ searchType, query, page = 1 }) => {
    try {
      const response = await axios.get(
        mediaEndpoints.list({ searchType, query, page })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};
export default searchAPI;
