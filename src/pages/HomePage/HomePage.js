import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=d08efe59ac708d7aace6afed9ba7eae9'
    )
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  console.log(movies);
  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
