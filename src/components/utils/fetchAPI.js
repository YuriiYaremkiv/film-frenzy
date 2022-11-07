const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'd08efe59ac708d7aace6afed9ba7eae9';

export const getFetchTrending = async () => {
  const response = await fetch(`${BASE_URL}trending/all/day?api_key=${KEY}`);
  if (response.ok) {
    const data = await response.json();
    return data.results;
  }
  throw new Error('Error responsive');
};

export const getFetchById = async movieId => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('Error responsive');
};

export const getFetchByCredits = async movieId => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  if (response.ok) {
    const data = await response.json();
    return data.cast;
  }
  throw new Error('Error responsive');
};
