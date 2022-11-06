import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';

import API from '../../components/utils/fetchAPI';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoadind] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoadind(true);
    (async () => {
      try {
        const movies = await API.getFetchTrending();
        setMovies(movies);
        setLoadind(false);
      } catch (error) {
        setLoadind(false);
        setError(true);
      }
    })();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {loading ? <Loader /> : null}
      {error ? <Error /> : null}
      {movies.length > 0 ? <MoviesList movies={movies} /> : null}
    </>
  );
};

// const
// fetch(
//   'https://api.themoviedb.org/3/trending/all/day?api_key=d08efe59ac708d7aace6afed9ba7eae9'
// )
//   .then(response => response.json())
//   .then(data => setMovies(data.results))
//   .catch(error => console.log(error));
