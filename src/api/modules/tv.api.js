import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'd08efe59ac708d7aace6afed9ba7eae9';

const mediaEndpoints = {
  listTV: ({ mediaType, tvType, page }) =>
    `${BASE_URL}${mediaType}/${tvType}?api_key=${KEY}&page=${page}`,
  detailsTV: ({ tvId }) => `${BASE_URL}tv/${tvId}?api_key=${KEY}`,
  creditsByTV: ({ tvId }) => `${BASE_URL}tv/${tvId}/credits?api_key=${KEY}`,
  reviewsByTV: ({ tvId }) => `${BASE_URL}tv/${tvId}/reviews?api_key=${KEY}`,
  trailersByTV: ({ tvId }) => `${BASE_URL}tv/${tvId}/videos?api_key=${KEY}`,
  recommendationsByTV: ({ tvId }) =>
    `${BASE_URL}tv/${tvId}/recommendations?api_key=${KEY}`,
};

const tvAPI = {
  getTV: async ({ mediaType, tvType, page = 1 }) => {
    try {
      const response = await axios.get(
        mediaEndpoints.listTV({ mediaType, tvType, page })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getDetailsForTV: async ({ tvId }) => {
    try {
      const response = await axios.get(mediaEndpoints.detailsTV({ tvId }));
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getCreditsByTV: async ({ tvId }) => {
    try {
      const response = await axios.get(mediaEndpoints.creditsByTV({ tvId }));
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getReviewsByTV: async ({ tvId }) => {
    try {
      const response = await axios.get(mediaEndpoints.reviewsByTV({ tvId }));
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getRecommendationsByTV: async ({ tvId }) => {
    try {
      const response = await axios.get(
        mediaEndpoints.recommendationsByTV({ tvId })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getTrailersByTV: async ({ tvId }) => {
    try {
      const response = await axios.get(mediaEndpoints.trailersByTV({ tvId }));
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default tvAPI;
