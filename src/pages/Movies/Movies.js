import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {MoviesList} from '../../components/MoviesList/MoviesList'

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryURL = searchParams.get('query') ?? '';

  const onChange = e => {
    setQuery(e.target.value);
  };


  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.currentTarget.search.value)
    setSearchParams({query});
    e.currentTarget.search.value = '';
  };


  const fetchQuery = query => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=d08efe59ac708d7aace6afed9ba7eae9&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    if (queryURL) {
      fetchQuery(queryURL);
    }
}, [queryURL])




  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={query} 
          onChange={onChange}
        />
      <button type="submit" >
        Search
      </button>
    </form>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
